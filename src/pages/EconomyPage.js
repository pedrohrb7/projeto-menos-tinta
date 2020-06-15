import React from "react";
import { Row, Col } from "reactstrap";

import Menu from "../_components/menu/Menu";
import SideMenu from "../_components/menu/SideMenu";
import StatisticEconomy from "../_components/estatistica/EstatiscaDeEconomia";

function Economy() {
	return (
		<>
			<Menu />
			<Row>
				<Col sm={4}>
					<SideMenu />
				</Col>
				<Col sm={8}>
					<StatisticEconomy />
				</Col>
			</Row>
		</>
	);
}

export default Economy;
