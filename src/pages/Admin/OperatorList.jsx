import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/AdminHeader";
import AdminNavbar from "../../components/AdminNavbar";
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
			<div className="pt-3 px-8 md:px-32 w-full h-full pb-16 bg-white"> 
				<h1 className="text-4xl font-bold p-4 text-center mb-5 text-black">
					Operators
				</h1>
				{loading ? (
				 <div className="items-center justify-center h-screen pt-20">
					 <Loader />
	  			</div>
				) : (
					<div className="w-full">
						<div className="flex flex-wrap -m-4 gap-6">
							{operators.map((operator, index) => (
								<div key={index} className="card w-96 bg-slate-100 shadow-md m-2 rounded-md">
									<div className="card-body">
										<h2 className="card-title">{operator.name}</h2>
										<div className="flex justify-between items-center">
											<p>OP343535</p>
											<Link to={`/admin/operator/${operator.id}`} className="card-actions justify-end">
												<button className="text-white text-sm inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded mt-4 md:mt-0">
													<span className="">
														View Details
													</span>
												</button>
											</Link>
										</div>
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
