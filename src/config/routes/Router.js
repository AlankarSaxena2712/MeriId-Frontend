import React, { useEffect } from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from "react-router-dom";
import Admin from "../../pages/Admin";
import AddGuidelines from "../../pages/Admin/AddGuidelines";
import AddOperator from "../../pages/Admin/AddOperator";
import Login from "../../pages/Admin/Login";
import OperatorList from "../../pages/Admin/OperatorList";
import Home from "../../pages/Home";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === "/") {
			navigate("/user");
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
				<Route path="/" element={<Home />} />
				<Route path="/user/*" element={<Home />} />
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
				<Route path="/admin/guidelines/add" element={<PrivateRoute />}>
					<Route
						path="/admin/guidelines/add"
						element={<AddGuidelines />}
					/>
				</Route>
				<Route
					path="/*"
					element={
						<h1 className="flex justify-center items-center text-4xl font-bold h-full">
							Not Found
						</h1>
					}
				/>
			</Routes>
		</AuthProvider>
	);
};

export default Router;
