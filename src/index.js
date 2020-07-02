import React from "react";
import ReactDOM from "react-dom";


import App from "./pages/App";
import Routes from './router';
import history from './history';


ReactDOM.render(
	<div>
		<Routes history={history}/>
	</div>,
	document.getElementById("root")
);
