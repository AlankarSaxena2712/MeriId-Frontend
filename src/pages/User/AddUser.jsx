import React from "react";

const AddUser = () => {
	return (
		<div>
			<div class="flex flex-col self-center max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 first-letter flex-justify-center items-center">
				<div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
					User Registration
				</div>
				<span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
					<a
						href="#"
						target="_blank"
						class="text-sm text-blue-500 underline hover:text-blue-700"
					>
						Sign in
					</a>
				</span>
				<div class="p-6 mt-8 w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 m-auto">
					<form action="#">
						<div class="flex flex-col mb-2">
							<div class="flex gap-4 mb-2">
								<div class=" relative ">
									<input
										type="text"
										id="create-account-first-name"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										name="First name"
										placeholder="First name"
									/>
								</div>
								<div class=" relative ">
									<input
										type="text"
										id="create-account-last-name"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										name="Last name"
										placeholder="Last name"
									/>
								</div>
							</div>
							<div class="flex flex-col mb-2">
								<div class=" relative ">
									<input
										type="text"
										id="create-account-email"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Email"
									/>
								</div>
							</div>
							<div class=" relative ">
								<input
									type="text"
									id="create-account-pseudo"
									class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
									name="Address"
									placeholder="Address"
								/>
							</div>
						</div>

						<div class="flex w-full my-4">
							<button
								type="submit"
								class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
							>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
