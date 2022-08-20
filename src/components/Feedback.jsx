import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
	return (
		<section class="text-gray-600 body-font">
			<div class="container px-5 mx-auto">
				<div class="flex flex-wrap -m-4">
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
				</div>
			</div>
		</section>
	);
};

export default Feedback;
