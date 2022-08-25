import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useToken from "../hooks/useToken";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLogin } = useToken();
	return isLogin() ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
