import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class UserInsert extends React.Component {
	constructor(props) {
		super(props);
		this.state = { nome: "", senha: "", departamento: "", email: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		// console.log(event.target.id);
		// this.setState({ event.target.id : event.target.value });
		// this.setState({ senha: event.target.value });
		// this.setState({ departamento: event.target.value });
		// this.setState({ email: event.target.value });

		let change = {};
		change[event.target.id] = event.target.value;
		this.setState(change);
	};

	handleSubmit = (event) => {
		console.log(
			this.state.nome,
			this.state.senha,
			this.state.departamento,
			this.state.email
		);
		event.preventDefault();

		var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		var apiUrl =
			"https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioInsert?0877";

		apiUrl += "&" + this.state.nome;
		apiUrl += "&" + this.state.senha;
		apiUrl += "&" + this.state.departamento;
		apiUrl += "&1&S&124&estacao";
		apiUrl += "&" + this.state.email;

		fetch(apiUrl, requestOptions)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => console.log("error", error));
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="formName">
					<Form.Label className="label-form">Nome</Form.Label>
					<input
						id="nome"
						value={this.state.nome}
						onChange={this.handleChange}
						type="text"
						placeholder="Nome"
					/>
				</Form.Group>

				<Form.Group controlId="formPassword">
					<Form.Label className="label-form">Senha</Form.Label>
					<input
					id="senha"
						value={this.state.senha}
						onChange={this.handleChange}
						type="password"
						placeholder="Senha"
					/>
				</Form.Group>

				<Form.Group controlId="formEmail">
					<Form.Label className="label-form">Email</Form.Label>
					<input
					id="email"
						value={this.state.email}
						onChange={this.handleChange}
						type="email"
						placeholder="Email"
					/>
				</Form.Group>

				<Form.Group controlId="formDepto">
					<Form.Label className="label-form">Departamento</Form.Label>
					<input
					id="departamento"
						value={this.state.departamento}
						onChange={this.handleChange}
						type="text"
						placeholder="Departamento"
					/>
				</Form.Group>

				<Form.Group controlId="formCodig">
					<Form.Label className="label-form">Código</Form.Label>
					<Form.Control disabled type="text" placeholder="Código" />
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					className="btn-save-change btn-custom"
				>
					Submit
				</Button>
			</Form>
		);
	}
}

export default UserInsert;
