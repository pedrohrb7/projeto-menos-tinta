import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./_components/login/Login.jsx";
import App from "./pages/App";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/PageControl" component={App} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
