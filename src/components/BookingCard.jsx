import React from "react";

const BookingCard = () => {
	return (
		<div className="flex w-1/2 justify-center my-4">
			<div
				className="
						m-1
                        border-l border-r border-b border-t
    	                ounded-b rounded-t rounded-l rounded-r
                        p-6
                        flex flex-col
                        justify-between
                        leading-normal
						bg-slate-100
                    "
			>
				<div className="mb-3 flex justify-between">
					<div className="text-gray-700 font-bold text-l mb-2 ">
						BookingId
						<span className="text-gray-700 text-base pl-2">
							BOOK1234567890
						</span>
					</div>
					<div className="text-gray-700 font-bold text-l mb-2 ">
						Date
						<span className="text-gray-700 text-base pl-2">
							20 Aug ,2022
						</span>
					</div>
				</div>
				<div>
					<p className="text-gray-900 mb-2 flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path
								fill="#40514e"
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
								className="color000 svgShape"
							/>
						</svg>
						&nbsp; Jonathan Reinink
					</p>
				</div>
				<div className="flex items-center">
					<div className="text-sm">
						<p className="text-gray-700 text-base">
							<span className="text-gray-700 font-bold text-l mb-2 pr-2">
								Address
							</span>
							B 22/23 Gautam Nagar ,Electronic city, Loreum,Blah
							Blah.
						</p>
						<p className="text-gray-700 text-base mb-2 pt-1 pb-2">
							<span className="text-gray-700 font-bold text-l mb-2 pr-2 ">
								Pincode
							</span>
							200014
						</p>
						<div className="flex items-center justify-between">
							<div className="p-1">
								<div className="dropdown inline-block relative">
								<div class="dropdown">
										<label tabindex="0" class="btn m-1">
											Click
										</label>
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
											<li>
												<a>Item 1</a>
											</li>
											<li>
												<a>Item 2</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="p-1">
								<div className="dropdown inline-block relative">
								<div class="dropdown">
										<label tabindex="0" class="btn m-1">
											Click
										</label>
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
											<li>
												<a>Item 1</a>
											</li>
											<li>
												<a>Item 2</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="p-1">
								<div className="inline-block relative">
									<button className="text-white inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">
										{" "}
										Submit
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-1"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingCard;
