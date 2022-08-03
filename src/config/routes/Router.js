import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../../pages/Admin";
import Home from "../../pages/Home";
import Chat from "../../pages/Chat";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/*" element={<h1 className="flex justify-center items-center text-4xl font-bold h-full">Not Found</h1>} />
				<Route path="/" element={<Chat />} />
            </Routes>
		</BrowserRouter>
	);
};

export default Router;
