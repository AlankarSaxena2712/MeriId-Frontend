import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/AdminHeader";
import AdminNavbar from "../../components/AdminNavbar";
import axios from "axios";
import { GLOBAL_URL } from "../../config/global/Contant";
import gif from "../../static/gif/guideline.gif";
import { ReactComponent as Loader } from "../../static/icons/loader.svg";
import Parser from "html-react-parser";
import { toast } from "react-toastify";

const AddGuidelines = () => {
	const [guidelines, setGudelines] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`${GLOBAL_URL}/general/guidelines?role=admin`)
				.then((res) => {
					setGudelines(res.data.data[0]["guideline"]);
				})
				.catch((err) => {
					toast.error("Something went wrong! Please try again.");
				})
				.finally(() => {
					setLoading(false);
				});
		};
		fetchData();
	}, []);

	return (
		<>
			<AdminHeader />
			{loading ? (
				<div className="items-center justify-center h-screen pt-20">
					<Loader />
				</div>
			) : (
				<div className="px-32 py-8 bg-white ">
					<h1 className="text-4xl font-bold text-center text-black ">
						Guidelines
					</h1>
					<div className="flex">
						<div className="py-12 pr-32">
							{" "}
							<img
								src={gif}
								alt="loading..."
								className="max-w-none h-96"
							/>{" "}
						</div>
						<div className="py-12 flex-2 text-gray-600 font-normal text-md">
							{Parser(guidelines)}
						</div>
					</div>
				</div>
			)}
			<AdminNavbar />
		</>
	);
};

export default AddGuidelines;
