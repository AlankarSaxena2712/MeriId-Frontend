import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./config/routes/Router";

function App() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;