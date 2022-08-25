import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import useAuth from "../../config/context/AuthContext";
import gif from "../../static/gif/signin.gif";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";


const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [captcha, setCaptcha] = useState(null);

	const { adminLogin, loginLoading } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			toast.error("Please fill all the fields");
		} else if (captcha === null) {
			toast.error("Please do the Recaptcha.")
		} else {
			await adminLogin(email, password);
		}
	};

	const handleCaptcha = (value) => {
		setCaptcha(value);
		localStorage.setItem("captcha", value);
	}

	return (
		<>
			<AdminHeader />
			<div className="bg-white h-full overflow-y-hidden">
				<h1 className="text-5xl font-bold p-8 pb-12 text-center text-black">
					Sign In
				</h1>

				<div className="flex justify-center items-center px-32">
					<div className="flex justify-center items-center w-2/4 h-96">
						<form className=" bg-slate-100 w-full  shadow-md rounded px-8 pt-12 pb-8 mb-4">
							<div className="mb-4">
								<label
									className="block text-gray-700 text-lg font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
									id="email"
									type="text"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>.-+
							<div className="mb-6">
								<label
									className="block text-gray-700 text-lg font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full h-14 text-lg py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>

                            <ReCAPTCHA
								className="mt-4"
								sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
								onChange={(e) => handleCaptcha(e)}
							/> 
							</div>

							<div className="flex items-center justify-between">
								<button
									className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
									type="submit"
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
					<div className="w-2/4 pl-48">
						{" "}
						<img
							src={gif}
							className="max-w-none"
							style={{ width: "100%" }}
							alt="login-svg"
						/>{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
