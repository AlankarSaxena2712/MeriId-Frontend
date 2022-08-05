import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../../pages/Admin";
import Home from "../../pages/Home";
import KommunicateChat from "../../pages/Chat";
import WebcamComponent from "../../pages/Webcam";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/*" element={<h1 className="flex justify-center items-center text-4xl font-bold h-full">Not Found</h1>} />
				<Route path="/chat" element={<KommunicateChat />} />
				<Route path="/webcam" element={<WebcamComponent />} />
				
            </Routes>
		</BrowserRouter>
	);
};

export default Router;
