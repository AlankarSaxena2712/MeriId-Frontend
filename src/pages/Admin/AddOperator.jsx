import axios from "axios";
import React, { useState } from "react";
import { GLOBAL_URL } from "../../config/global/Contant";
import AdminHeader from "../../components/AdminHeader";
import AdminNavbar from "../../components/AdminNavbar";
import {ReactComponent as Loader} from "../../static/icons/loader.svg";

import Pincodes from "../../static/json/pincode.json";
import { useNavigate } from "react-router-dom";

const AddOperator = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [pincode, setPincode] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate()

	const handlePincode = (val) => {
		setPincode(val);
		if (val.length === 6) {
			const selectedState = Pincodes.filter((item) => item.pincode === parseInt(val))[0].stateName;
			const selectedCity = Pincodes.filter((item) => item.pincode === parseInt(val))[0].districtName;
			setState(selectedState)
			setCity(selectedCity)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		axios.post(`${GLOBAL_URL}/auth/operator-add`, {
			name,
			email,
			phone_number: phoneNumber,
			pin_code: pincode,
			state,
			city
			}, {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Token ${localStorage.getItem("token")}`
				}
			}).then((res) => {
				console.log(res.data.data);
				setName("");
				setEmail("");
				setPhoneNumber("");
				setPincode("");
				setState("");
				setCity("");
				navigate("/admin/operator/list")
			}).catch((err) => {
				if (err.response.data.errors.phone_number[0] === "user with this phone number already exists.") {
					alert("User with this phone number already exists.")
				}
				console.log(err.response);
			}).finally(() => {
				setLoading(false);
			}
		);
	}

	return (
		<>
		<AdminHeader />
		<div className="mb-8 px-4 ">
			<h1 className="text-4xl font-bold pt-10 pb-10 text-center text-black">Add Operator</h1>
			<form
				className="w-full max-w-xl bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 m-auto mb-mb-100"
				autoComplete="false"
			>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full px-3 mb-1 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-name"
						>
							Name
						</label>
						<input
							className="  appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-name"
							type="text"
							autoComplete="off"
							placeholder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{/* <p className="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-1/2 px-3 mb-1 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-email"
						>
							Email
						</label>
						<input
							className="  appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-email"
							type="email"
							autoComplete="off"
							placeholder="Enter Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{/* <p className="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
					<div className="w-1/2 px-3 mb-1 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-phone-number"
						>
							Phone Number
						</label>
						<input
							className="  appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-phone-number"
							type="tel"
							maxLength={10}
							minLength={10}
							autoComplete="off"
							placeholder="Enter Phone Number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
						{/* <p className="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-zip"
						>
							Pin Code
						</label>
						<input
							className="  appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-zip"
							type="text"
							autoComplete="off"
							maxLength={6}
							minLength={6}
							placeholder="Enter Pin Code"
							value={pincode}
							onChange={(e) => handlePincode(e.target.value)}
						/>
					</div>
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-state"
						>
							State
						</label>
						<input
							className="  appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
							id="grid-state"
							type="text"
							placeholder="Enter State"
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-city"
						>
							City
						</label>
						<input
							className=" appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
							id="grid-city"
							type="text"
							placeholder="Enter City"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex items-center justify-end mt-5">
					<button
						className=" bg-orange-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
						onClick={(e) => handleSubmit(e)}
						disabled={loading}
					>
						{loading ? (
							<Loader className="h-6 w-24 bg-transparent" />
						) : (
							<span>Add Operator</span>
						)}
					</button>
				</div>
			</form>
		</div>
		<AdminNavbar />
		</>
	);
};

export default AddOperator;
