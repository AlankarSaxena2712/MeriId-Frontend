import React from "react";

const UserInfo = () => {
	return (
		<>
			<div class="text-align-center">
				{" "}
				<h1> User Info </h1>{" "}
			</div>
			<div>
				<div class="w-60 h-full shadow-md bg-white px-1 absolute">
					<ul class="relative">
						<li class="relative">
							<a
								href="/"
								class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
								data-mdb-ripple="true"
								data-mdb-ripple-color="dark"
							>
								Basic Details
							</a>
						</li>

						<li class="relative">
							<a
								href="/"
								class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
								data-mdb-ripple="true"
								data-mdb-ripple-color="dark"
							>
								Address
							</a>
						</li>

						<li class="relative">
							<a
								href="/"
								class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
								data-mdb-ripple="true"
								data-mdb-ripple-color="dark"
							>
								Upcoming Slots
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default UserInfo;
