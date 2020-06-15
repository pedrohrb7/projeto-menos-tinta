import React from "react";
import { Row, Col } from "reactstrap";

import Menu from "../_components/menu/Menu";
import SideMenu from "../_components/menu/SideMenu";
// import Graphics from "../_components/inventory-receipt/Insumos";
// Necessario codigo dos graficos

function Graphics() {
	return (
		<>
			<Menu />
			<Row>
				<Col sm={4}>
					<SideMenu />
				</Col>
				<Col sm={8}>{/* <Graphics /> */}</Col>
			</Row>
		</>
	);
}

export default Graphics;
