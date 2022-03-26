import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import axios from "axios";
import { GLOBAL_URL } from "../../config/global/Contant";
import { ReactComponent as Loader } from "../../static/icons/loader.svg";

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
			<div className="pt-3 px-8 md:px-32 w-full max-h-full h-full bg-meriGrey">
				<h1 className="text-3xl font-bold p-4 text-center mb-5">
					Operators
				</h1>
				{loading ? (
					<Loader />
				) : (
					<div className="w-full">
						<div className="flex flex-wrap -m-4">
							{operators.map((operator, index) => (
								<div key={index} className="p-4 m-2 w-full md:w-2/2 lg:w-3/3 shadow-md rounded-lg shadow-meriLightBlue bg-white">
									<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
										<div className="flex-grow">
											<h2 className="title-font font-medium text-lg text-gray-900 relative">
												{operator.name}
												{operator.status && (
													<span className="absolute right-0 text-xs bg-meriLightBlue text-white px-2 py-1 rounded-full">
														{operator.status}
													</span>
												)}
											</h2>
											<h3 className="text-gray-500 text-sm">
												{operator.email}
											</h3>
											<h3 className="text-gray-500 text-sm mb-3">
												{operator.phone_number}
											</h3>
											<p className="mb-2">
												{operator.city},{" "}
												{operator.state},{" "}
												{operator.pin_code}
											</p>
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
