import React, { useState, useEffect } from "react";
import { GLOBAL_URL } from "../config/global/Contant";
import { ReactComponent as Empty } from "../static/icons/empty.svg";
import axios from "axios";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const GivenTask = ({ uuid }) => {
	const [isLoading, setLoading] = useState(true);
	const [giventask, setGiventask] = useState([]);
	const [date, setDate] = useState(
		`${new Date().getFullYear()}-${
			("0" + (new Date().getMonth() + 1))
		}-${new Date().getDate()}`
	);

	const getGiventask = async () => {
		await axios
			.get(
				`${GLOBAL_URL}/booking/booking/operator-slot/${uuid}?date=${date}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				}
			)
			.then(async (response) => {
				setGiventask(response.data.data);
			})
			.catch(async (error) => {
				toast.error("Something went wrong! Please try again.");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getGiventask();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date]);

	return (
		<div className="overflow-x-auto container px-5 mx-auto">
			<div className="flex justify-end my-4">
				<input
					type="date"
					className="bg-gray-50 border block 
				border-gray-300
				text-gray-900 
				sm:text-sm rounded-lg 
				focus:ring-orange-500
				 focus:border-orange-500 
				 pl-4 p-2.5 "
					placeholder="Select date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</div>
			{isLoading ? (
				<div className="flex justify-center items-center h-full w-full mt-36">
					<Spinner />
				</div>
			) : giventask.length > 0 ? (
				<>
					<table className="table w-full text-center">
						<thead>
							<tr>
								<th></th>
								<th>Booking Id</th>
								<th>Slot Time</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{giventask.map((task, index) => (
								<tr className=" " key={index}>
									<th className="">1</th>
									<td className="">{task.id}</td>
									<td className="">
										{task.slot === null ? "-" : task.slot}
									</td>
									<td className="">{task.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<div className="flex justify-center item-center h-full w-full mt-16">
					<Empty />
				</div>
			)}
		</div>
	);
};

export default GivenTask;
