import React from "react";
import { useEffect } from "react";

const ChatBot = ({ props }) => {
	useEffect(() => {
		((d, m) => {
			const kommunicateSettings = {
				appId: "259ee76a76674e8ee1a6d02613a91595f",
				popupWidget: true,
				automaticChatOpenOnNavigation: true,
			};
			const s = document.createElement("script");
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
			const h = document.getElementsByTagName("head")[0];
			h.appendChild(s);
			window.kommunicate = m;
			m._globals = kommunicateSettings;
		})(document, window.kommunicate || {});
	}, []);

	return <div></div>;
};

export default ChatBot;
