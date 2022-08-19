import React from "react";

const GivenTask = () => {

	return (
		<div className="overflow-x-auto">
			<div className="flex justify-end my-4">
				<input type="date" className="bg-gray-50 border block border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
			</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th></th>
						<th>Booking Id</th>
						<th>Slot Time</th>
						<th>Location</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-meriGreen">
						<th className="bg-meriGreen">1</th>
						<td className="bg-meriGreen">BK0001</td>
						<td className="bg-meriGreen">1-2 PM</td>
						<td className="bg-meriGreen">Click here</td>
						<td className="bg-meriGreen">Completed</td>
					</tr>
					<tr>
						<th className="bg-meriGreen">2</th>
						<td className="bg-meriGreen">BK0002</td>
						<td className="bg-meriGreen">2-3 PM</td>
						<td className="bg-meriGreen">Click here</td>
						<td className="bg-meriGreen">Completed</td>
					</tr>
					<tr>
						<th className="bg-error">3</th>
						<td className="bg-error">BK0003</td>
						<td className="bg-error">3-4 PM</td>
						<td className="bg-error">Click here</td>
						<td className="bg-error">Pending</td>
					</tr>
					<tr>
						<th className="bg-meriGreen">4</th>
						<td className="bg-meriGreen">BK0004</td>
						<td className="bg-meriGreen">4-5 PM</td>
						<td className="bg-meriGreen">Click here</td>
						<td className="bg-meriGreen">Completed</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default GivenTask;
