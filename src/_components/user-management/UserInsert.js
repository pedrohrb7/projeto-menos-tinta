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

	handleChange(event) {
		this.setState({ nome: event.target.nome });
		this.setState({ senha: event.target.senha });
		this.setState({ departamento: event.target.departamento });
		this.setState({ email: event.target.email });
	}

	handleSubmit(event) {
		event.preventDefault();

		var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");

		// fetch(
		// 	"https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioInsert?0877",
		// 	{
		// 		method: "GET",
		// 		headers: myHeaders,
		// 	},

		// 	JSON.stringify({
		// 		nome: event.target.nome,
		// 		senha: event.target.senha,

		// 		departamento: event.target.departamento,
		// 		email: event.target.email,
		// 	})
		// )
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 		alert(result);
		// 	})
		// 	.catch((error) => console.log("error", error));
		
		fetch(
			"'https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioInsert?0877" +
				"&" +
				this.state.nome +
				"&" +
				this.state.senha +
				"&" +
				this.state.departamento +
				"& x & x & x & x & x &" +
				this.state.email +
				"'",
			{
				method: "GET",
				headers: myHeaders,
			}
		)
			.then((res) => res.json())
			.then((result) => {
				alert(result);
				console.log(result);
			})
			.catch((error) => console.log("error", error));
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="formName">
					<Form.Label className="label-form">Nome</Form.Label>
					<Form.Control
						value={this.state.nome}
						onChange={this.handleChange}
						type="text"
						placeholder="Nome"
					/>
				</Form.Group>

				<Form.Group controlId="formPassword">
					<Form.Label className="label-form">Senha</Form.Label>
					<Form.Control
						value={this.state.senha}
						onChange={this.handleChange}
						type="password"
						placeholder="Senha"
					/>
				</Form.Group>

				<Form.Group controlId="formEmail">
					<Form.Label className="label-form">Email</Form.Label>
					<Form.Control
						value={this.state.email}
						onChange={this.handleChange}
						type="email"
						placeholder="Email"
					/>
				</Form.Group>

				<Form.Group controlId="formDepto">
					<Form.Label className="label-form">Departamento</Form.Label>
					<Form.Control
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
