import React, { useEffect } from "react";
import Logo from "../../static/img/MeriIdLogoWithoutBackgroundWhite.png";
import { ReactComponent as Logout } from "../../static/icons/logout.svg";
import useAuth from "../../config/context/AuthContext";
import useToken from "../../config/hooks/useToken"
import { useLocation } from "react-router-dom";

const AdminHeader = () => {

	const {logout} = useAuth();
	const {userData} = useToken();

	const { pathname } = useLocation();

	useEffect(() => {
		
	}, [userData])

	return (
		<header className="bg-meriBlue flex justify-center items-center font-bold text-white h-14 text-3xl relative">
			<img src={Logo} alt="logo" className="contain h-12 w-12" />
			<p>मेरी Id</p>
			{pathname !== "/admin/login" && (
				<div onClick={() => logout()} className="cursor-pointer">
					<Logout className="absolute right-3 top-2 h-8 w-8" />
				</div>
			)}
		</header>
	);
};

export default AdminHeader;
