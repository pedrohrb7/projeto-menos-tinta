import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Row, Col } from "reactstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./SideMenu.css";
import userSide from "../../_imgs/user-cog.svg";
import ticketingSide from "../../_imgs/print.svg";
import chartSide from "../../_imgs/chart-bar.svg";
import chartPieSide from "../../_imgs/chart-pie.svg";
import supplySide from "../../_imgs/fill-drip.svg";

import UserList from "../../pages/UserListPage";
import Ticketing from "../../pages/TicketingPage";
import Iventory from "../../pages/InventoryReceiptPage";
import Economy from "../../pages/EconomyPage";
import Graphics from "../../pages/GraphicsPage";
// import TicketingPage from "../../pages/TicketingPage";

const SideMenu = () => {
	return (
		<>
			<div className="side-menu">
				<div>
					<Router>
						<Row>
							<Col sm={4}>
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
									<ListGroupItem className="side-list">
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
							</Col>
							<Col sm={8}>
								<Switch>
									<Route path="/bilhetagem" exact component={Ticketing}>
										{/* <Ticketing /> */}
									</Route>
									<Route path="/estatisticaEconomia">
										<Economy />
									</Route>
									<Route path="/graficos">
										<Graphics />
									</Route>
									<Route path="/entradaInsumos">
										<Iventory />
									</Route>
									<Route path="/usuarios">
										<UserList />
									</Route>
								</Switch>
							</Col>
						</Row>
					</Router>
				</div>
			</div>
		</>
	);
};

export default SideMenu;
