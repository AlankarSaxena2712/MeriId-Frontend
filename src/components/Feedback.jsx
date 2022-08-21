import React from "react";
import FeedbackCard from "./FeedbackCard";
import { useEffect, useState } from "react";
import { GLOBAL_URL } from "../config/global/Contant";
import { ReactComponent as Empty } from "../static/icons/empty.svg";
import axios from "axios";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

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
				toast.error("Something went wrong! Please try again.");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		feedBackOfOperator();
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 mx-auto">
				<div className="flex flex-wrap -m-4">
					{isLoading ? (
						<div className="flex justify-center items-center h-full w-full mt-36">
							<Spinner />
						</div>
					) : feedback.length > 0 ? (
						feedback.map((f, index) => (
							<FeedbackCard feedback={f} key={index} />
						))
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
