import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import useAuth from "../../config/context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { adminLogin, loginLoading } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await adminLogin(email, password);
	};


	return (
		<>
			<AdminHeader />
			<div className="bg-meriGrey h-screen overflow-y-hidden">
				<h1 className="text-3xl font-bold p-4 text-center">Sign In</h1>
				<div className="w-full flex justify-center items-center pt-10">
					<form className="bg-white w-full max-w-md shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="text"
								placeholder="Emter Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="Enter Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-meriBlue hover:bg-meriLightBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="button"
								onClick={(e) => handleSubmit(e)}
							>
								{loginLoading ? (
									<div className="flex justify-center items-center">
										Signing In
										<div
											className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full text-white ml-2"
											role="status"
										>
											<span className="visually-hidden"></span>
										</div>
									</div>
								) : (
									"Sign In"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
			<AdminNavbar />
		</>
	);
};

export default Login;
