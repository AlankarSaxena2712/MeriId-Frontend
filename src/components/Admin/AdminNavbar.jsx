import React from "react";
import { ReactComponent as OperatorListIcon } from "../../static/icons/list-outline.svg";
import { ReactComponent as OperatorListActiveIcon } from "../../static/icons/list.svg";
import { ReactComponent as OperatorAddIcon } from "../../static/icons/userAdd-outline.svg";
import { ReactComponent as OperatorAddActiveIcon } from "../../static/icons/userAdd.svg";
import { ReactComponent as GuidelineAddIcon } from "../../static/icons/guideline-outline.svg";
import { ReactComponent as GuidelineAddActiveIcon } from "../../static/icons/guideline.svg";
import { NavLink, useLocation } from "react-router-dom";

const AdminNavbar = () => {
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
					to={"/admin/operator/list"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("/admin/operator/list") ? (
						<>
							<div className="bg-meriLightBlue rounded-full px-16">
								<OperatorListActiveIcon className="w-8 h-8 text-white" />
								<p className="text-sm font-bold text-white">Operator list</p>
							</div>	
						</>
					) : (
						<>	
							<OperatorListIcon className="w-8 h-8" />
							<p className="text-sm ">Operator list</p>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/admin/operator/add"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("/admin/operator/add") ? (
						<>
						<div className="bg-meriLightBlue rounded-full w-full px-16">
							<OperatorAddActiveIcon className="w-8 h-8 text-white" />
							<p className="text-sm font-bold text-white">Add operator</p>
						</div>
						</>
					) : (
						<>
							<OperatorAddIcon className="w-8 h-8" />
							<p className="text-sm">Add operator</p>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/admin/guidelines/add"}
					className="flex flex-col justify-center items-center text-meriInactiveGrey"
				>
					{pathMatchRoute("/admin/guidelines/add") ? (
						<>
						<div className="bg-meriLightBlue rounded-full px-16">
							<GuidelineAddActiveIcon className="w-8 h-8 text-white" />
							<p className="text-sm font-bold text-white">Add guidelines</p>
							</div>
						</>
					) : (
						<>
							<GuidelineAddIcon className="w-8 h-8" />
							<p className="text-sm">Add guidelines</p>
						</>
					)}
				</NavLink>
			</nav>
		</footer>
	);
};

export default AdminNavbar;
