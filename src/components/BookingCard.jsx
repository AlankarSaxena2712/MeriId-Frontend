import React from "react";

const BookingCard = () => {
	return (
		<div className="flex w-1/2 justify-center my-4">
			<div
				className="
                        border-l border-r border-b border-t border-gray-400
                        bg-white
                        rounded-b rounded-t rounded-l rounded-r
                        p-4
                        flex flex-col
                        justify-between
                        leading-normal
                    "
			>
				<div className="mb-3 flex justify-between">
					<div className="text-gray-700 font-bold text-l mb-2">
						Booking Id
						<span className="text-gray-700 text-base">B1234567</span>
					</div>
					<div className="text-gray-700 font-bold text-l mb-2">
						Date
						<span className="text-gray-700 text-base">
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
							<span className="text-gray-700 font-bold text-l mb-2">
								Address
							</span>
							B 22/23 Gautam Nagar ,Electronic city, Loreum,Blah
							Blah.
						</p>
						<p className="text-gray-700 text-base mb-2">
							<span className="text-gray-700 font-bold text-l mb-2">
								Pincode
							</span>
							200014
						</p>
						<div className="flex items-center justify-between">
							<div className="p-1">
								<div className="dropdown inline-block relative">
									<button
										className="
                                                bg-blue-300
                                                text-gray-700
                                                font-semibold
                                                py-2
                                                px-4
                                                rounded
                                                inline-flex
                                                items-center
                                            "
									>
										<span className="mr-1">Operators</span>
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</button>
									<ul
										className="
                                                dropdown-menu
                                                absolute
                                                text-gray-700
                                                pt-1
                                            "
									>
										<li className="">
											<a
												className="
                                                        rounded-t
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												alankr saxena 1234
											</a>
										</li>
										<li className="">
											<a
												className="
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												Two
											</a>
										</li>
										<li className="">
											<a
												className="
                                                        rounded-b
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												Three
											</a>
										</li>
										<li className="">
											<a
												className="
                                                        rounded-b
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												Three
											</a>
										</li>
										<li className="">
											<a
												className="
                                                        rounded-b
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												Three
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="p-1">
								<div className="dropdown inline-block relative">
									<button
										className="
                                                bg-green-300
                                                text-gray-700
                                                font-semibold
                                                py-2
                                                px-4
                                                rounded
                                                inline-flex
                                                items-center
                                            "
									>
										<span className="mr-1">Time Slot</span>
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</button>
									<ul
										className="
                                                dropdown-menu
                                                absolute
                                                text-gray-700
                                                pt-1
                                            "
									>
										<li className="">
											<a
												className="
                                                        rounded-t
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												11:00 am
											</a>
										</li>
										<li className="">
											<a
												className="
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												2:00 pm
											</a>
										</li>
										<li className="">
											<a
												className="
                                                        rounded-b
                                                        bg-gray-200
                                                        hover:bg-gray-400
                                                        py-2
                                                        px-4
                                                        block
                                                        whitespace-no-wrap
                                                    "
												href="#"
											>
												4:00 pm
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="p-1">
								<div className="inline-block relative">
									<button
										className="
                                                bg-orange-300
                                                text-gray-700
                                                font-semibold
                                                py-2
                                                px-6
                                                rounded
                                                inline-flex
                                                items-center
                                            "
									>
										<span className="mr-1">Submit</span>
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
