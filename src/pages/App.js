import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ListGroup, ListGroupItem } from "reactstrap";

// import UserList from "./pages/UserListPage";
// import LoginPage from "./pages/LoginPage";

import UserList from "./UserListPage";
import Ticketing from "./TicketingPage";
import Iventory from "./InventoryReceiptPage";
import Economy from "./EconomyPage";
import Graphics from "./GraphicsPage";

function App() {
	return (
		<div className="App">
			{/* Aqui deve conter apenas a tela de login, pois é a tela principal */}
			{/* <LoginPage /> */}
			{/* <UserList /> */}

			{/* *************************  */}
			<div>
				<Router>
					<ListGroup>
						<ListGroupItem>
							<Link exact to="/bilhetagem">
								{/* <img
									src={ticketingSide}
									className="icon"
									alt="icone bilhetagem menu lateral"
								/> */}
								Bilhetagem
							</Link>
						</ListGroupItem>
						<ListGroupItem>
							<Link to="/estatisticaEconomia">
								{/* <img
									src={chartSide}
									className="icon"
									alt="icone estatistica menu lateral"
								/> */}
								Estatistica de Economia
							</Link>
						</ListGroupItem>
						<ListGroupItem>
							<Link to="/graficos">
								{/* <img
									src={chartPieSide}
									className="icon"
									alt="icone graficos menu lateral"
								/> */}
								Gráficos
							</Link>
						</ListGroupItem>
						<ListGroupItem>
							<Link to="/entradaInsumos">
								{/* <img
									src={supplySide}
									className="icon"
									alt="icone insumos menu lateral"
								/> */}
								Entradas de Insumos
							</Link>
						</ListGroupItem>
						<ListGroupItem className="side-list">
							<Link to="/usuarios">
								{/* <img
									src={userSide}
									className="icon"
									alt="icone usuario menu lateral"
								/> */}
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
	);
}

export default App;
