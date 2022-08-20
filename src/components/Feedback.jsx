import React from "react";
import FeedbackCard from "./FeedbackCard";
import { useEffect, useState } from "react";
import { GLOBAL_URL } from "../config/global/Contant";
import { ReactComponent as Empty } from "../static/icons/empty.svg";
import axios from "axios";
import Spinner from "./Spinner";

const Feedback = ({ uuid }) => {
	const [isLoading, setLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);

	const feedBackOfOperator = async () => {
		await axios
			.get(`${GLOBAL_URL}/general/feedback?operator=${uuid}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
			.then(async (response) => {
				setFeedback(response.data.data);
			})
			.catch(async (error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		feedBackOfOperator();
	}, []);

	return (
		<section class="text-gray-600 body-font">
			<div class="container px-5 mx-auto">
				<div class="flex flex-wrap -m-4">
					{isLoading ? (
						<div class="flex justify-center items-center h-full w-full mt-36">
							<Spinner />
						</div>
					) : feedback === [] ? (
						feedback.map((f) => <FeedbackCard feedback={f} />)
					) : (
						<div className="flex justify-center item-center h-full w-full mt-16">
							<Empty />
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Feedback;
