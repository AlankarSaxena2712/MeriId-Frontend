import React from "react";
import { ReactComponent as OperatorListIcon } from "../../static/icons/list-outline.svg";
import { ReactComponent as OperatorAddIcon } from "../../static/icons/userAdd-outline.svg";
import { ReactComponent as OperatorAddActiveIcon } from "../../static/icons/userAdd.svg";
import { ReactComponent as GuidelineAddIcon } from "../../static/icons/guideline-outline.svg";
import { ReactComponent as GuidelineAddActiveIcon } from "../../static/icons/guideline.svg";
import { NavLink, useLocation } from "react-router-dom";

const UserNavbar = () => {
	const { pathname } = useLocation();

	const pathMatchRoute = (path) => {
		if (path === pathname) {
			return true;
		}
		return false;
	};

	return (
		<footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-meriBlue">
			<nav className="flex justify-around items-center h-full w-full">
				<NavLink
					to={"/user/adduser"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("user/adduser") ? (
						<>
							{/* <div className="bg-meriLightBlue justify-center items-center flex flex-col rounded-full px-16">
								<OperatorListActiveIcon className="w-8 h-8 text-white" />
								<p className="text-sm font-bold text-white">
									User Registration
								</p>
							</div> */}
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex flex-col w-full px-16">
								<OperatorListIcon className="w-8 h-8" />
								<p className="text-sm ">User Registration</p>
							</div>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/user/showbooking"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("user/showbooking") ? (
						<>
							<div className="bg-meriLightBlue justify-center items-center flex flex-col rounded-full w-full px-16">
								<OperatorAddActiveIcon className="w-8 h-8 text-white" />
								<p className="text-sm font-bold text-white">
									 Appointment Booking
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex flex-col w-full px-16">
								<OperatorAddIcon className="w-8 h-8" />
								<p className="text-sm">Booking</p>
							</div>
						</>
					)}
				</NavLink>
                <NavLink
					to={"/user/guidelines"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("/user/guidelines") ? (
						<>
							<div className="bg-meriLightBlue justify-center items-center flex flex-col rounded-full w-full px-16">
								<OperatorAddActiveIcon className="w-8 h-8 text-white" />
								<p className="text-sm font-bold text-white">
									 Add Guidelines
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex flex-col w-full px-16">
								<OperatorAddIcon className="w-8 h-8" />
								<p className="text-sm">User Guidelines</p>
							</div>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/user/userinfo"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("/user/userinfo") ? (
						<>
							<div className="bg-meriLightBlue justify-center items-center flex flex-col rounded-full px-16">
								<GuidelineAddActiveIcon className="w-8 h-8 text-white" />
								<p className="text-sm font-bold text-white">
									User Information
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex flex-col w-full px-16">
								<GuidelineAddIcon className="w-8 h-8" />
								<p className="text-sm">User Info</p>
							</div>
						</>
					)}
				</NavLink>
			</nav>
		</footer>
	);
};

export default UserNavbar;
