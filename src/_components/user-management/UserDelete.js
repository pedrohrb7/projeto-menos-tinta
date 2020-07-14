import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class UserDelete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			codigo: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
        this.setState({ codigo: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		var apiUrl =
			"https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioUpdate?0877&";
		apiUrl += this.state.codigo;
		apiUrl += "&x&x&x&x&x&x&x&N&x";

		fetch(apiUrl, requestOptions)
			.then((result) => {
				console.log(result);
				console.log("inativado");
			})
			.catch((error) => console.log("error", error));
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="formName">
					<Form.Label className="label-form">Código</Form.Label>
					<input
						id="nome"
						value={this.state.codigo}
						onChange={this.handleChange}
						type="text"
						placeholder="Informe o código do usuário para confirmar a ação"
					/>
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

export default UserDelete;
