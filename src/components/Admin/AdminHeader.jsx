import React, { useEffect } from "react";
import Logo from "../../static/img/logo.png";
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
<header class="text-gray-600 body-font">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
				<img src={Logo} alt="logo" className="contain h-12 w-12" />
		  <span class="ml-3 text-xl font-bold">Meri Id</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
		</nav>

		{pathname !== "/admin/login" && (
				<button onClick={() => logout()} class="text-white inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0"> Logout
		  			<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
		  			</svg>
				</button>
			)}
	  </div>
	</header>

	);
};


export default AdminHeader;









		// <header className="bg-meriWhite flex justify-center items-center font-bold text-black h-20 text-3xl ">
		 
		// 	<p>मेरी Id</p>
		// 	{pathname !== "/admin/login" && (
		// 		<div onClick={() => logout()} className="cursor-pointer">
		// 			<Logout className="absolute right-3 top-2 h-8 w-8" />
		// 		</div>
		// 	)}
		// </header>
