import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "reactstrap";

import App from "./pages/App";
// import Login from "./pages/LoginPage";
// import Menu from "./_components/menu/Menu";
// import SideMenu from "./_components/menu/SideMenu";

ReactDOM.render(
	<React.StrictMode>
		{/* <Login /> */}
		<>
			<App/>
			{/* <Row>
				<Col sm={12}>
					<Menu />
				</Col>
			</Row>

			<Row>
				<Col sm={4}>
					<SideMenu />
				</Col>
				<Col sm={8}>
					<App />
				</Col>
			</Row>*/}
		</>
	</React.StrictMode>,
	document.getElementById("root")
);
