import React from "react";

import { ListGroup, ListGroupItem, Col, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./PageControl.css";

import Ticketing from "../../pages/TicketingPage";
import UserList from "../../pages/UserListPage";
import Iventory from "../../pages/InventoryReceiptPage";
import Economy from "../../pages/EconomyPage";
import Graphics from "../../pages/GraphicsPage";
// import Menu from './Menu';
// import TicketingPage from "../../pages/TicketingPage";

import userSide from "../../_imgs/user-cog.svg";
import ticketingSide from "../../_imgs/print.svg";
import chartSide from "../../_imgs/chart-bar.svg";
import chartPieSide from "../../_imgs/chart-pie.svg";
import supplySide from "../../_imgs/fill-drip.svg";

const PageControl = () => {
	return (
		<Router>
			<Row>
				<Col sm={4}>
					<div className="side-menu">
						<ListGroup>
							<ListGroupItem>
								<Link exact to="/bilhetagem">
									<img
										src={ticketingSide}
										className="icon"
										alt="icone bilhetagem menu lateral"
									/>
									Bilhetagem
								</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/estatisticaEconomia">
									<img
										src={chartSide}
										className="icon"
										alt="icone estatistica menu lateral"
									/>
									Estatistica de Economia
								</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/graficos">
									<img
										src={chartPieSide}
										className="icon"
										alt="icone graficos menu lateral"
									/>
									Gráficos
								</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/entradaInsumos">
									<img
										src={supplySide}
										className="icon"
										alt="icone insumos menu lateral"
									/>
									Entradas de Insumos
								</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/usuarios">
									<img
										src={userSide}
										className="icon"
										alt="icone usuario menu lateral"
									/>
									Usuários
								</Link>
							</ListGroupItem>
						</ListGroup>
					</div>
				</Col>
				<Col sm={8}>
					<Switch>
						<Route path="/PageControl" exact component={Ticketing} />
						<Route path="/bilhetagem" component={Ticketing} />
						<Route path="/estatisticaEconomia" component={Economy} />
						<Route path="/graficos" component={Graphics} />
						<Route path="/entradaInsumos" component={Iventory} />
						<Route path="/usuarios" component={UserList} />
					</Switch>
				</Col>
			</Row>
		</Router>
	);
};

export default PageControl;
