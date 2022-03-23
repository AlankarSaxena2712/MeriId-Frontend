import React from "react";
import Logo from "../../static/img/MeriIdLogoWithoutBackgroundWhite.png";
import {ReactComponent as Logout} from "../../static/icons/logout.svg";

const AdminHeader = () => {
	return (
		<header className="bg-meriBlue flex justify-center items-center font-bold text-white h-14 text-3xl relative">
			<img src={Logo} alt="logo" className="contain h-12 w-12" />
			<p>मेरी Id</p>
      <Logout className="absolute right-3 top-3 h-8 w-8" />
		</header>
	);
};

export default AdminHeader;
