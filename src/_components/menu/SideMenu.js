import React from "react";
import {
	// Navbar,
	// NavbarBrand,
	// NavbarText,
	ListGroup,
	ListGroupItem,
} from "reactstrap";
// import Button from "react-bootstrap/Button";

import "./Menu.css";
// import MenosTinta from "../../_imgs/logo-branco.png";
// import loggedUser from "../../_imgs/user-circle.svg";
// import searchIcon from "../../_imgs/search-solid.svg";
import userSide from "../../_imgs/user-cog.svg";
import ticketingSide from "../../_imgs/print.svg";
import chartSide from "../../_imgs/chart-bar.svg";
import chartPieSide from "../../_imgs/chart-pie.svg";
import supplySide from "../../_imgs/fill-drip.svg";

const SideMenu = (props) => {
	return (
		<>
			<div className="side-menu">
				<div>
					<ListGroup>
						<ListGroupItem>
							<a tag="a" href="#">
								<img
									src={ticketingSide}
									className="icon"
									alt="icone bilhetagem menu lateral"
								/>
								Bilhetagem
							</a>
						</ListGroupItem>
						<ListGroupItem>
							<a href="">
								<img
									src={chartSide}
									className="icon"
									alt="icone estatistica menu lateral"
								/>
								Estatistica de Economia
							</a>
						</ListGroupItem>
						<ListGroupItem>
							<a href="">
								<img
									src={chartPieSide}
									className="icon"
									alt="icone graficos menu lateral"
								/>
								Gráficos
							</a>
						</ListGroupItem>
						<ListGroupItem>
							<a href="">
								<img
									src={supplySide}
									className="icon"
									alt="icone insumos menu lateral"
								/>
								Entradas de Insumos
							</a>
						</ListGroupItem>
						<ListGroupItem className="side-list">
							<a tag="a" href="#">
								<img
									src={userSide}
									className="icon"
									alt="icone usuario menu lateral"
								/>
								Usuários
							</a>
						</ListGroupItem>
					</ListGroup>
				</div>
			</div>
		</>
	);
};

export default SideMenu;
