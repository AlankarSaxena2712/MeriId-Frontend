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
		<footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-meriWhite shadow-md shadow-black">
			<nav className="flex justify-around items-center h-full w-full">
				<NavLink
					to={"/admin/operator/list"}
					className="flex gap-2 justify-center items-center text-white"
				>
					{pathMatchRoute("/admin/operator/list") ? (
						<>
							<div className="bg-meriRed justify-center items-center flex gap-2 rounded-lg px-8 py-2">
								<OperatorListActiveIcon className="w-8 h-8 text-white" />
								<p className="text-md font-bold text-white">
									Operator list
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex gap-2 w-full px-8">
								<OperatorListIcon className="w-8 h-8 text-black" />
								<p className="text-md text-black">Operator list</p>
							</div>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/admin/operator/add"}
					className="flex gap-2 justify-center items-center text-white"
				>
					{pathMatchRoute("/admin/operator/add") ? (
						<>
							<div className="bg-meriRed justify-center items-center flex gap-2 rounded-lg w-full px-8 py-2">
								<OperatorAddActiveIcon className="w-8 h-8 text-white" />
								<p className="text-md font-bold text-white">
									Add operator
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex gap-2 w-full px-8">
								<OperatorAddIcon className="w-8 h-8 text-black" />
								<p className="text-md text-black">Add operator</p>
							</div>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/admin/bookings"}
					className="flex gap-2 justify-center items-center text-white"
				>
					{pathMatchRoute("/admin/bookings") ? (
						<>
							<div className="bg-meriRed justify-center items-center flex gap-2 rounded-lg px-8 py-2">
								<GuidelineAddActiveIcon className="w-8 h-8 text-white" />
								<p className="text-md font-bold text-white">
									Bookings
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center gap-2 flex w-full px-8">
								<GuidelineAddIcon className="w-8 h-8 text-black" />
								<p className="text-md text-black">Bookings</p>
							</div>
						</>
					)}
				</NavLink>
				<NavLink
					to={"/admin/guidelines/add"}
					className="flex gap-2 justify-center items-center text-white"
				>
					{pathMatchRoute("/admin/guidelines/add") ? (
						<>
							<div className="bg-meriRed justify-center items-center flex gap-2 rounded-lg px-8 py-2">
								<GuidelineAddActiveIcon className="w-8 h-8 text-white" />
								<p className="text-md font-bold text-white">
									Add guidelines
								</p>
							</div>
						</>
					) : (
						<>
							<div className="rounded-full justify-center items-center flex gap-2 w-full px-8">
								<GuidelineAddIcon className="w-8 h-8 text-black" />
								<p className="text-md text-black">Add guidelines</p>
							</div>
						</>
					)}
				</NavLink>
			</nav>
		</footer>
	);
};

export default AdminNavbar;
