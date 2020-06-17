import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
// import { ListGroup, ListGroupItem } from "reactstrap";

// import UserList from "./pages/UserListPage";
// import LoginPage from "./pages/LoginPage";

import Menu from "../_components/menu/Menu";
import SideMenu from "../_components/menu/SideMenu";

import UserList from "./UserListPage";
import Ticketing from "./TicketingPage";
import Iventory from "./InventoryReceiptPage";
import Economy from "./EconomyPage";
import Graphics from "./GraphicsPage";

function App() {
	return (
		<Router>
			<Menu/>
			<Row>
				<Col sm={12}>
					<SideMenu />
				</Col>
			</Row>
		</Router>
	);
}

export default App;
