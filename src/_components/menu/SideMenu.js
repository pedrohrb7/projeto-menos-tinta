import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Menu.css";
import userSide from "../../_imgs/user-cog.svg";
import ticketingSide from "../../_imgs/print.svg";
import chartSide from "../../_imgs/chart-bar.svg";
import chartPieSide from "../../_imgs/chart-pie.svg";
import supplySide from "../../_imgs/fill-drip.svg";

import UserList from "../../pages/UserList";
import Ticketing from "../../pages/TicketingPage";
import Iventory from "../../pages/InventoryReceipt";
import Economy from "../../pages/Economy";
import Graphics from "../../pages/Graphics";

const SideMenu = (props) => {
	return (
		<>
			<div className="side-menu">
				<div>
					<Router>
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
								<Link exact to="/estatisticaEconomia">
									<img
										src={chartSide}
										className="icon"
										alt="icone estatistica menu lateral"
									/>
									Estatistica de Economia
								</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link exact to="/graficos">
									<img
										src={chartPieSide}
										className="icon"
										alt="icone graficos menu lateral"
									/>
									Gráficos
								</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link exact to="/entradaInsumos">
									<img
										src={supplySide}
										className="icon"
										alt="icone insumos menu lateral"
									/>
									Entradas de Insumos
								</Link>
							</ListGroupItem>
							<ListGroupItem className="side-list">
								<Link exact to="/usuarios">
									<img
										src={userSide}
										className="icon"
										alt="icone usuario menu lateral"
									/>
									Usuários
								</Link>
							</ListGroupItem>
						</ListGroup>

						<Switch>
							<Route path="/bilhetagem">
								<Ticketing />
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
					</Router>
				</div>
			</div>
		</>
	);
};

export default SideMenu;
