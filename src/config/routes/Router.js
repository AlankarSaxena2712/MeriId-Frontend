import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AddGuidelines from "../../pages/Admin/AddGuidelines";
import AddOperator from "../../pages/Admin/AddOperator";
import Login from "../../pages/Admin/Login";
import OperatorDetail from "../../pages/Admin/OperatorDetail";
import OperatorList from "../../pages/Admin/OperatorList";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { ReactComponent as NotFound } from "../../static/icons/notfound.svg";
import Booking from "../../pages/Admin/Booking";
// eslint-disable-next-line
import devTools from "devtools-detect";
import ChatBot from "../../components/ChatBot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		document.addEventListener("contextmenu", function (e) {
			e.preventDefault();
		});
		window.addEventListener("devtoolschange", function (e) {
			if (e.detail.isOpen) {
				localStorage.clear();
				window.location.href = "/unauthorized";
			}
		});
	}, []);

	useEffect(() => {
		if (pathname === "/") {
			navigate("/admin");
		}
		if (pathname === "/admin/" || pathname === "/admin") {
			navigate("/admin/operator/list");
		}
		if (pathname === "/admin/operator/" || pathname === "/admin/operator") {
			navigate("/admin/operator/list");
		}
		if (
			pathname === "/admin/guidelines/" ||
			pathname === "/admin/guidelines"
		) {
			navigate("/admin/guidelines/add");
		}
	}, [pathname, navigate]);

	return (
		<AuthProvider>
			<Routes>
				<Route path="/admin/login" element={<Login />} />
				<Route path="/admin/operator/list" element={<PrivateRoute />}>
					<Route
						path="/admin/operator/list"
						element={<OperatorList />}
					/>
				</Route>
				<Route path="/admin/operator/add" element={<PrivateRoute />}>
					<Route
						path="/admin/operator/add"
						element={<AddOperator />}
					/>
				</Route>
				<Route path="/admin/operator/:uuid" element={<PrivateRoute />}>
					<Route
						path="/admin/operator/:uuid"
						element={<OperatorDetail />}
					/>
				</Route>
				<Route path="/admin/guidelines/add" element={<PrivateRoute />}>
					<Route
						path="/admin/guidelines/add"
						element={<AddGuidelines />}
					/>
				</Route>
				<Route path="/admin/bookings" element={<PrivateRoute />}>
					<Route path="/admin/bookings" element={<Booking />} />
				</Route>
				<Route
					path="/*"
					element={
						<h1 className="flex justify-center items-center text-4xl font-bold h-full  py-28 px-32">
							<NotFound />
						</h1>
					}
				/>
			</Routes>
			<ChatBot />
			<ToastContainer />
		</AuthProvider>
	);
};

export default Router;
