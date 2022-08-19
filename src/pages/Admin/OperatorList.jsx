import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import axios from "axios";
import { GLOBAL_URL } from "../../config/global/Contant";
import { ReactComponent as Loader } from "../../static/icons/loader.svg";
import { Link } from "react-router-dom";

const OperatorList = () => {
	const [operators, setOperators] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`${GLOBAL_URL}/auth/operators`, {
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				})
				.then((res) => {
					setOperators(res.data.data);
				})
				.catch((err) => {
					console.log(err);
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
			<div className="pt-3 px-8 md:px-32 w-full h-full pb-16 bg-meriCreme"> 
				<h1 className="text-3xl font-bold p-4 text-center mb-5">
					Operators
				</h1>
				{loading ? (
					<Loader />
				) : (
					<div className="w-full">
						<div className="flex flex-wrap -m-4">
							{operators.map((operator, index) => (
								<div key={index} className="card w-96 bg-base-100 shadow-xl m-2">
									<div className="card-body">
										<h2 className="card-title">{operator.name}</h2>
										<p>{operator.email}</p>
										<p>{operator.phone_number}</p>
										<p>{operator.city},{" "}{operator.state},{" "}{operator.pin_code}</p>
										<Link to={`/admin/operator/${operator.uuid}`} className="card-actions justify-end">
											<button className="btn btn-info btn-outline">View Details</button>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<AdminNavbar />
		</>
	);
};

export default OperatorList;
