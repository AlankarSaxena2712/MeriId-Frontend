import React, { useState } from "react";
import { ReactComponent as Star } from "../static/icons/star.svg";

const FeedbackCard = ({ feedback }) => {
	return (
		<div className="p-4 md:w-1/2 w-full">
			<div className="h-full bg-gray-100 p-8 rounded">
				<div className="flex justify-between">
					<h2 className="font-bold text-black">
						{feedback.booking_id}
					</h2>
					<p>
						{new Date(feedback.created_at).toLocaleString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
				</div>
				<h3 className="text-2xl py-3 flex justify-between">
					<div className="flex gap-4">
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
						{feedback.name}
					</div>
					<div className="flex gap-4">
						{feedback.rating.map((i, index) => (
							<Star className="h-6 w-6" key={index} />
						))}
					</div>
				</h3>
				<p className="leading-relaxed my-2">{feedback.description}</p>
			</div>
		</div>
	);
};

export default FeedbackCard;
