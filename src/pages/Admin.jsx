import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminNavbar from "../components/Admin/AdminNavbar";
import { ReactComponent as NotFound } from "../../static/icons/notfound.svg";
const Admin = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
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
		<div className="flex flex-col h-screen bg-White">
			<AdminHeader />
			<Routes>
				<Route
					path="/*"
					element={
						<h1 className="flex justify-center items-center text-4xl font-bold h-full  py-28 px-32">
							<NotFound />
						</h1>
					}
				/>
			</Routes>
			<AdminNavbar />
		</div>
	);
};

export default Admin;
