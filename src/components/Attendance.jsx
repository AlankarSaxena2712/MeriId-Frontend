import React from 'react'
import {ReactComponent as EyeLogo} from "../static/icons/eye-solid.svg";

const Attendance = () => {
  return (
    <div className="overflow-x-auto mx-24">
			<div className="flex justify-end my-4">
				<input type="date" className="bg-gray-50 border block border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
			</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th></th>
						<th>Date</th>
						<th>Punch In</th>
						<th>Punch Out</th>
						<th>Status</th>
						<th>Slots</th>
					</tr>
				</thead>
				<tbody>
					<tr className=" bg-green-100">
						<th className="bg-green-100">1</th>
						<td className="bg-green-100">20-08-2022</td>
						<td className="bg-green-100">10:02:00</td>
						<td className="bg-green-100">-</td>
						<td className="bg-green-100">Present</td>
						<td className="bg-green-100"><EyeLogo className='w-6 h-6' /></td>
					</tr>
					<tr className=" bg-green-100">
						<th className="bg-green-100">1</th>
						<td className="bg-green-100">20-08-2022</td>
						<td className="bg-green-100">10:02:00</td>
						<td className="bg-green-100">-</td>
						<td className="bg-green-100">Present</td>
						<td className="bg-green-100"></td>
					</tr>
					<tr className=" bg-green-100">
						<th className="bg-green-100">1</th>
						<td className="bg-green-100">20-08-2022</td>
						<td className="bg-green-100">10:02:00</td>
						<td className="bg-green-100">-</td>
						<td className="bg-green-100">Present</td>
						<td className="bg-green-100"></td>
					</tr>
					<tr className=" bg-green-100">
						<th className="bg-green-100">1</th>
						<td className="bg-green-100">20-08-2022</td>
						<td className="bg-green-100">10:02:00</td>
						<td className="bg-green-100">-</td>
						<td className="bg-green-100">Present</td>
						<td className="bg-green-100"></td>
					</tr>
					<tr className=" bg-green-100">
						<th className="bg-green-100">1</th>
						<td className="bg-green-100">20-08-2022</td>
						<td className="bg-green-100">10:02:00</td>
						<td className="bg-green-100">-</td>
						<td className="bg-green-100">Present</td>
						<td className="bg-green-100"></td>
					</tr>
				</tbody>
			</table>
		</div>
  )
}

export default Attendance