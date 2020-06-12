import React, { Component } from "react";

import "./User-Management.css";
// import NewUser from "./NewUser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class UserManagement extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		var myHeaders = new Headers();

		myHeaders.append("X-Requested-With", "XMLHttpRequest");

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch(
			"https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Usuarios?0877",
			requestOptions
		)
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					users: response,
				});
			})
			.catch((error) => console.log("error", error));
	}

	render() {
		const editIcon = <FontAwesomeIcon icon={faEdit} />;
		const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

		var content = <p>Carregando lista de usuários...</p>;

		if (this.state.users.length !== 0) {
			content = (
				<table>
					<thead>
						<tr className="headerTable">
							<th style={{ borderTopLeftRadius: "15px" }}>Código</th>
							<th>Nome</th>
							<th>Departamento</th>
							<th colSpan="2" style={{ borderTopRightRadius: "15px" }}>
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map((user) => (
							<tr key={user.RowId}>
								<td className="user-codigo"> {user.usu_codigo} </td>
								<td>{user.usu_nome}</td>
								<td>{user.dpt_codigo}</td>

								<td colSpan="2" className="actions">
									<a href="#" className="action-edit">
										<span>{editIcon}</span>
										Editar
									</a>
									<a href="#" className="action-delete">
										<span>{deleteIcon}</span>
										Excluir
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			);
		}
		return (
			<div>
				<div className="container content">
					{content}
					{/* <NewUser /> */}
				</div>
			</div>
		);
	}
}
