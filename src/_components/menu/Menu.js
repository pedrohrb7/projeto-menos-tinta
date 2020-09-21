import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarText,
} from "reactstrap";
import Button from "react-bootstrap/Button";

import "./Menu.css";
import MenosTinta from "../../_imgs/logo-branco.png";
import loggedUser from "../../_imgs/user-circle.svg";

const Menu = (props) => {
	return (
		<div>
			<div className="content-fluid">
				<Navbar expand="md" className="menu-top">
					<div className="container">
						<NavbarBrand href="/bilhetagem">
							<img
								src={MenosTinta}
								className="d-inline-block align-top menos-tinta-logo"
								alt="Menos Tinta Logo"
							/>
						</NavbarBrand>
						<Button type="submit" className="print-button" onClick={window.print}>
							Visualizar | Imprimir Consulta
						</Button>
						<NavbarText collapse className="login-session">
							<a href="#login">
								<img src={loggedUser} className="logged-user" alt="usuário logado icone" />
								{/* Aqui será inserido o user da sessao */}
								username
							</a>
							<span className="log-out">
								<a href="#login">Sair</a>
							</span>
						</NavbarText>
					</div>
				</Navbar>
			</div>
		</div>
	);
};

export default Menu;
