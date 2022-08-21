import React , {useState , useEffect} from "react";
import { GLOBAL_URL } from "../config/global/Contant";
import { ReactComponent as Empty } from "../static/icons/empty.svg";
import axios from "axios";
import Spinner from "./Spinner";

const GivenTask = ({uuid}) => {

	const [isLoading, setLoading] = useState(true);
	const [giventask, setGiventask] = useState([]);
	const [date, setDate] = useState("");


	const getGiventask = async () => {
		await axios
			.get(`${GLOBAL_URL}/booking/task/${uuid}?date=${date}`, {
				headers: {
					"Content-Type": "application/json",
					"Authorization" : `Token ${localStorage.getItem("token")}`,
				},
			})
			.then(async (response) => {
				setGiventask(response.data.data);
			})
			.catch(async (error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getGiventask();
	}, []);

	return (
		<div className="overflow-x-auto container px-5 mx-auto">
			
			{isLoading ? (
						<div class="flex justify-center items-center h-full w-full mt-36">
							<Spinner />
						</div>
					) : giventask !== [] ? (
						<>					
			<div className="flex justify-end my-4">
				<input type="date" 
				className="bg-gray-50 border block 
				border-gray-300
				text-gray-900 
				sm:text-sm rounded-lg 
				focus:ring-orange-500
				 focus:border-orange-500 
				 pl-4 p-2.5 "
				placeholder="Select date"
				value = {date}
				onChange={(e) => setDate(e.target.value)}
				/>
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
					<tr className=" ">
						<th className="">1</th>
						<td className="">BK0001</td>
						<td className="">1-2 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">2</th>
						<td className="">BK0002</td>
						<td className="">2-3 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="bg-red-100">3</th>
						<td className="bg-red-100">BK0003</td>
						<td className="bg-red-100">3-4 PM</td>
						<td className="bg-red-100">Click here</td>
						<td className="bg-red-100">Pending</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
					<tr>
						<th className="">4</th>
						<td className="">BK0004</td>
						<td className="">4-5 PM</td>
						<td className="">Click here</td>
						<td className="">Completed</td>
					</tr>
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
