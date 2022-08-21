import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./config/routes/Router";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<BrowserRouter className = "font-family">
			<Routes />
		<ToastContainer/>	
		</BrowserRouter>
	);
}

export default App;