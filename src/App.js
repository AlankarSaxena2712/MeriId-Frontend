import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./config/routes/Router";
import "./index.css";

function App() {
	return (
		<BrowserRouter className = "font-family">
			<Routes />
		</BrowserRouter>
	);
}

export default App;