import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AddGuidelines from "./Admin/AddGuidelines";
import AddOperator from "./Admin/AddOperator";
import OperatorList from "./Admin/OperatorList";

const Admin = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/admin/" || pathname === "/admin") {
            navigate("/admin/operator/list");
        }
        if (pathname === "/admin/operator/" || pathname === "/admin/operator") {
            navigate("/admin/operator/list");
        }
        if (pathname === "/admin/guidelines/" || pathname === "/admin/guidelines") {
            navigate("/admin/guidelines/add");
        }
    }, [pathname, navigate])


	return (
		<div className="flex flex-col h-screen mb-28">
			<AdminHeader />
			<Routes>
				<Route path="/operator/list" element={<OperatorList />} />
				<Route path="/operator/add" element={<AddOperator />} />
				<Route path="/guidelines/add" element={<AddGuidelines />} />
                <Route path="/*" element={<h1 className="flex justify-center items-center text-4xl font-bold h-full">Not Found</h1>} />
			</Routes>
			<AdminNavbar />
		</div>
	);
};

export default Admin;
