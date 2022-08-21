import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as EyeLogo } from "../static/icons/eye-solid.svg";
import { ReactComponent as Download } from "../static/icons/download.svg";
import { GLOBAL_URL } from "../config/global/Contant";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const Attendance = ({ uuid }) => {
	const [loading, setLoading] = useState(true);
	const [attendance, setAttendance] = useState([]);
	const [startDate, setStartDate] = useState(
		`${new Date(
			new Date().setDate(new Date().getDate() - 30)
		).getFullYear()}-${
			"0" +
			(new Date(
				new Date().setDate(new Date().getDate() - 30)
			).getMonth() +
				1)
		}-${new Date(new Date().setDate(new Date().getDate() - 30)).getDate()}`
	);
	const [endDate, setEndDate] = useState(
		`${new Date().getFullYear()}-${
			"0" + (new Date().getMonth() + 1)
		}-${new Date().getDate()}`
	);

	const [slotsData, setSlotsData] = useState([]);
	const [slotsLoading, setSlotsLoading] = useState(true);

	const getAttendance = async () => {
		await axios
			.get(
				`${GLOBAL_URL}/auth/attendance?operator=${uuid}&date_from=${startDate}&date_to=${endDate}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				}
			)
			.then(async (response) => {
				setAttendance(response.data.data);
			})
			.catch(async (error) => {
				toast.error("Something went wrong! Please try again.");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const getSlots = async (date) => {
		await axios
			.get(`${GLOBAL_URL}/auth/operator/time_slot/${uuid}?date=${date}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
			.then(async (response) => {
				setSlotsData(response.data.data);
			})
			.catch(async (error) => {
				toast.error("Something went wrong! Please try again.");
			})
			.finally(() => {
				setSlotsLoading(false);
			});
	};

	const downloadAttendance = async () => {
		await axios
			.get(
				`${GLOBAL_URL}/auth/attendance/download?operator=${uuid}&date_from=${startDate}&date_to=${endDate}`,
				{
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				}
			)
			.then(async (response) => {
				const url = window.URL.createObjectURL(
					new Blob([response.data])
				);
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", "attendance.xlsx");
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			})
			.catch(async (error) => {
				toast.error("Something went wrong! Please try again.");
			});
	};

	useEffect(() => {
		getAttendance();
	}, [endDate, startDate]);

	return (
		<>
			<div className="overflow-x-auto overflow-y-hidden container px-5 mx-auto">
				<div className="flex justify-between my-4 items-center gap-6">
					<div
						onClick={() => downloadAttendance()}
						className="btn bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600"
					>
						Download
						<Download className="ml-2 h-4 w-4" />
					</div>
					<div className="flex justify-end items-center gap-6">
						<div className="flex gap-2 items-center">
							<label htmlFor="date-from">From</label>
							<input
								type="date"
								id="date-from"
								className="bg-gray-50 border block border-gray-300 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 pl-4 p-2.5   "
								placeholder="Select date"
								value={startDate}
								onChange={(e) => setStartDate(e.target.value)}
							/>
						</div>
						<div className="flex gap-2 items-center">
							<label htmlFor="date-to">To</label>
							<input
								type="date"
								id="date-to"
								className="bg-gray-50 border block border-gray-300  sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 pl-4 p-2.5 "
								placeholder="Select date"
								value={endDate}
								onChange={(e) => setEndDate(e.target.value)}
							/>
						</div>
					</div>
				</div>
				{loading ? (
					<div className="flex justify-center items-center mt-20">
						<Spinner />
					</div>
				) : (
					<table className="table w-full text-center">
						<thead>
							<tr>
								<th>S.No</th>
								<th>Date</th>
								<th>Punch In</th>
								<th>Punch Out</th>
								<th>Status</th>
								<th>Slots</th>
							</tr>
						</thead>
						<tbody>
							{attendance.map((item, index) => (
								<tr className="" key={index}>
									<th className="">{index + 1}</th>
									<td className="">{item.date}</td>
									<td className="">{item.punch_in}</td>
									<td className="">
										{item.punch_out !== null
											? item.punch_out
											: "-"}
									</td>
									<td className="capitalize">
										{item.status}
									</td>
									<td className="">
										<label
											onClick={() => getSlots(item.date)}
											htmlFor="slots-modal"
											className="modal-button cursor-pointer justify-center items-center flex"
										>
											<EyeLogo className="w-6 h-6" />
										</label>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
			<input type="checkbox" id="slots-modal" className="modal-toggle" />
			<label htmlFor="slots-modal" className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="slots-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					{slotsLoading ? (
						<div className="flex justify-center items-center mt-20">
							<Spinner />
						</div>
					) : (
						<table className="table w-full mt-8">
							<thead>
								<tr>
									<th>Slot Time</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{slotsData.map((item, index) => (
									<tr key={index}>
										<td>{item.slot}</td>
										<td>
											{item.status === true
												? "Free"
												: "Occupied"}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</label>
		</>
	);
};

export default Attendance;
