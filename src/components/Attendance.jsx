import React from "react";
import { ReactComponent as EyeLogo } from "../static/icons/eye-solid.svg";

const Attendance = () => {
	return (
		<>
			<div className="overflow-x-auto container px-5 mx-auto">
				<div className="flex justify-end my-4 items-center gap-6">
					<div className="flex gap-2 items-center">
						<label htmlFor="date-from">From</label>
						<input
							type="date"
							id="date-from"
							className="bg-gray-50 border block border-gray-300 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 pl-4 p-2.5   "
							placeholder="Select date"
						/>
					</div>
					<div className="flex gap-2 items-center">
						<label htmlFor="date-to">To</label>
						<input
							type="date"
							id="date-to"
							className="bg-gray-50 border block border-gray-300  sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 pl-4 p-2.5 "
							placeholder="Select date"
						/>
					</div>
				</div>
				<table className="table w-full">
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
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
								<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
						<tr className=" ">
							<th className="">1</th>
							<td className="">20-08-2022</td>
							<td className="">10:02:00</td>
							<td className="">-</td>
							<td className="">Present</td>
							<td className="">
							<label for="slots-modal" className="modal-button cursor-pointer">
									<EyeLogo className="w-6 h-6" />
								</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<input type="checkbox" id="slots-modal" className="modal-toggle" />
			<label htmlFor="slots-modal" className="modal">
				<div className="modal-box relative">
					<label
						for="slots-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<table className="table w-full mt-8">
						<thead>
							<tr>
								<th>Slot Time</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>10:00 AM - 11:00 AM</td>
								<td>Free</td>
							</tr>
							<tr>
								<td>11:00 AM - 12:00 PM</td>
								<td>Occupied</td>
							</tr>
							<tr>
								<td>12:00 PM - 1:00 PM</td>
								<td>Occupied</td>
							</tr>
							<tr>
								<td>1:00 PM - 2:00 PM</td>
								<td>Free</td>
							</tr>
							<tr>
								<td>2:00 PM - 3:00 PM</td>
								<td>Occupied</td>
							</tr>
							<tr>
								<td>3:00 PM - 4:00 PM</td>
								<td>Free</td>
							</tr>
							<tr>
								<td>4:00 PM - 5:00 PM</td>
								<td>Occupied</td>
							</tr>
							<tr>
								<td>5:00 PM - 6:00 PM</td>
								<td>Free</td>
							</tr>
						</tbody>
					</table>
				</div>
			</label>
		</>
	);
};

export default Attendance;
