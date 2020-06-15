import React from "react";
import { Row, Col } from "reactstrap";

import Menu from "../_components/menu/Menu";
import SideMenu from "../_components/menu/SideMenu";
import InventoryReciepts from "../_components/inventory-receipt/Insumos";

function Inventory() {
	return (
		<>
			<Menu />
			<Row>
				<Col sm={4}>
					<SideMenu />
				</Col>
				<Col sm={8}>
					<InventoryReciepts />
				</Col>
			</Row>
		</>
	);
}

export default Inventory;
