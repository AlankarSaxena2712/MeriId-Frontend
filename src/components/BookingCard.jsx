import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GLOBAL_URL } from "../config/global/Contant";
import Spinner from "./Spinner";

const BookingCard = ({ booking }) => {
	const [operators, setOperators] = useState([]);
	const [operatorLoading, setOperatorLoading] = useState(true);
	const [selectedOperator, setSelectedOperator] = useState(null);
	const [timeSlots, setTimeSlots] = useState([]);
	const [timeSlotLoading, setTimeSlotLoading] = useState(true);
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
	const [editBooking, setEditBooking] = useState(false);

	const getOperators = async () => {
		await axios
			.get(`${GLOBAL_URL}/auth/admin/operator/list`, {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
			.then((res) => {
				setOperators(res.data.data);
				console.log(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setOperatorLoading(false);
			});
	};

	const getTimeSlots = async (uuid) => {
		await axios
			.get(
				`${GLOBAL_URL}/auth/operator/time_slot/${uuid}?date=${`${new Date().getFullYear()}-${
					new Date().getMonth() + 1
				}-${new Date().getDate()}`}`,
				{
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				}
			)
			.then((res) => {
				setTimeSlots(
					res.data.data.filter((timeSlot) => timeSlot.status === true)
				);
				console.log(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setTimeSlotLoading(false);
			});
	};

	const handleSubmit = async () => {
		await axios
			.put(
				`${GLOBAL_URL}/booking/booking/admin/changes`,
				{
					operator: selectedOperator.uuid,
					time_slot: selectedTimeSlot.slot,
					booking_id: booking.booking_id,
				},
				{
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				}
			)
			.then((res) => {
				setEditBooking(false);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getOperators();
		if (booking.operator === null && booking.slot_time === null) {
			setEditBooking(true);
		} else {
			setEditBooking(false);
		}
	}, []);

	useEffect(() => {
		if (selectedOperator) {
			getTimeSlots(selectedOperator.uuid);
		}
	}, [selectedOperator]);

	return (
		<div className="flex w-1/2 justify-center my-4">
			<div
				className="
						m-1
                        border-l border-r border-b border-t
    	                ounded-b rounded-t rounded-l rounded-r
                        p-6
                        flex flex-col
                        justify-between
                        leading-normal
						bg-slate-100
                    "
			>
				<div className="mb-3 flex justify-between">
					<div className="text-gray-700 font-bold text-l mb-2 ">
						BookingId
						<span className="text-gray-700 text-base pl-2">
							{booking.booking_id}
						</span>
					</div>
					<div className="text-gray-700 font-bold text-l mb-2 ">
						Date
						<span className="text-gray-700 text-base pl-2">
							{booking.slot_date}
						</span>
					</div>
				</div>
				<div>
					<p className="text-gray-900 mb-2 flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path
								fill="#40514e"
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
								className="color000 svgShape"
							/>
						</svg>
						&nbsp; {booking.name}
					</p>
				</div>
				<div className="flex items-center">
					<div className="text-sm">
						<p className="text-gray-700 text-base">
							<span className="text-gray-700 font-bold text-l mb-2 pr-2">
								Address
							</span>
							{booking.address}
						</p>
						<p className="text-gray-700 text-base mb-2 pt-1 pb-2">
							<span className="text-gray-700 font-bold text-l mb-2 pr-2 ">
								Pincode
							</span>
							{booking.pincode}
						</p>
						<div className="flex items-center justify-between">
							<div className="p-1">
								{editBooking === true ? (
									<div className="dropdown inline-block relative">
										<div className="dropdown">
											<label
												tabIndex="0"
												className="btn btn-sm m-1 bg-white text-black hover:bg-slate-200 border-slate-300 normal-case"
											>
												{selectedOperator
													? selectedOperator.name
													: "Operator"}
												<svg
													className="-mr-1 ml-2 h-5 w-5"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</label>
											<ul
												tabIndex="0"
												className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
											>
												{operatorLoading ? (
													<div className="flex justify-center items-center">
														<Spinner
															height={8}
															width={8}
														/>
													</div>
												) : (
													operators.map((item) => (
														<li
															key={item.id}
															onClick={() => {
																setSelectedOperator(
																	item
																);
																setTimeSlots(
																	[]
																);
																setSelectedTimeSlot(
																	null
																);
															}}
														>
															<span>
																{item.name}
															</span>
														</li>
													))
												)}
											</ul>
										</div>
									</div>
								) : (
									<div className="text-orange-500 text-base pl-2 font-bold">
										{booking.operator}
									</div>
								)}
							</div>
							<div className="p-1">
								{editBooking === true ? (
									<div className="dropdown inline-block relative">
										<div className="dropdown">
											<label
												tabIndex="0"
												className="btn btn-sm m-1 bg-white text-black hover:bg-slate-200 border-slate-300 normal-case"
											>
												{selectedTimeSlot
													? selectedTimeSlot.slot
													: "Time Slot"}
												<svg
													className="-mr-1 ml-2 h-5 w-5"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</label>
											<ul
												tabIndex="0"
												className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
											>
												{selectedOperator === null ? (
													<li>
														<span>
															No Operator Selected
														</span>
													</li>
												) : timeSlotLoading ? (
													<div className="flex justify-center items-center">
														<Spinner
															height={8}
															width={8}
														/>
													</div>
												) : (
													timeSlots.map(
														(item, index) => (
															<li
																key={index}
																onClick={() =>
																	setSelectedTimeSlot(
																		item
																	)
																}
															>
																<span>
																	{item.slot}
																</span>
															</li>
														)
													)
												)}
											</ul>
										</div>
									</div>
								) : (
									<div className="text-orange-500 text-base pl-2 font-bold">
										<span>{booking.slot_time}</span>
									</div>
								)}
							</div>
							<div className="p-1">
								<div className="inline-block relative">
									{editBooking === true ? (
										<button
											onClick={() => handleSubmit()}
											className="text-white inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0"
										>
											{" "}
											Submit
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 ml-1"
												viewBox="0 0 24 24"
											>
												<path d="M5 12h14M12 5l7 7-7 7"></path>
											</svg>
										</button>
									) : (
										<button
											onClick={() => setEditBooking(true)}
											className="text-white inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0"
										>
											{" "}
											Edit
											<svg
												fill="#ffffff"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 30 30"
												className="w-4 h-4 ml-1"
											>
												{" "}
												<path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
											</svg>
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingCard;
