import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import Menu from "./_components/menu/Menu";

ReactDOM.render(
	<React.StrictMode>
		<>
			<Menu />
			<App />
		</>
	</React.StrictMode>,
	document.getElementById("root")
);
