import React from "react";

const AddOperator = () => {
	return (
		<div className="bg-meriGrey mb-8">
			<h1 className="text-3xl font-bold p-4 text-center">Add Operator</h1>
			<form 
                class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 m-auto"
                autoComplete="false"    
            >
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-full px-3 mb-1 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-name"
						>
							Name
						</label>
						<input
							class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-name"
							type="text"
                            autoComplete="off"
							placeholder="Enter Name"
						/>
						{/* <p class="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-1/2 px-3 mb-1 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-email"
						>
							Email
						</label>
						<input
							class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-email"
							type="email"
                            autoComplete="off"
							placeholder="Enter Email"
						/>
						{/* <p class="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
					<div class="w-1/2 px-3 mb-1 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-phone-number"
						>
							Phone Number
						</label>
						<input
							class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-phone-number"
							type="tel"
                            autoComplete="off"
							placeholder="Enter Phone Number"
						/>
						{/* <p class="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-1/2 px-3 mb-1 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password"
						>
							Password
						</label>
						<input
							class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-password"
							type="password"
                            autoComplete="off"
							placeholder="Enter Password"
						/>
						{/* <p class="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
					<div class="w-1/2 px-3 mb-1 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-confirm-password"
						>
							Confirm Password
						</label>
						<input
							class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-confirm-password"
							type="password"
                            autoComplete="off"
							placeholder="Confirm Password"
						/>
						{/* <p class="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-address"
						>
							Address
						</label>
						<input
							class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-address"
							type="text"
							placeholder="Enter Address"
						/>
						{/* <p class="text-gray-600 text-xs italic">
							Make it as long and as crazy as you'd like
						</p> */}
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-city"
						>
							City
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="text"
							placeholder="Albuquerque"
						/>
					</div>
					<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-state"
						>
							State
						</label>
						<div class="relative">
							<select
								class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-state"
							>
								<option>New Mexico</option>
								<option>Missouri</option>
								<option>Texas</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									class="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-zip"
						>
							Zip
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-zip"
							type="text"
							placeholder="90210"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddOperator;
