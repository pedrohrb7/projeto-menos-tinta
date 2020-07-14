import React, { Component } from "react";

import photo from "../../_imgs/photo.svg";
import "./Login.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			senha: "",
			logado: false,
		};
	}

	logar(event) {
		event.preventDefault();

		const { history } = this.props;
		const { email, senha } = this.state;

		var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		if (email === "" || senha === "") {
			alert("Por favor digite um usuário ou senha");
		} else {
			fetch(
				"https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Login?" +
					this.state.email +
					"&" +
					this.state.senha,
				requestOptions
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(JSON.stringify(data));
					if (JSON.stringify(data) === "") {
					} else {
						history.push("/PageControl");
					}
				})
				.catch((err) => console.error(err));
		}
	}
	render() {
		return (
			<div className="login">
				<div className="container-login">
					<form className="box-login" onSubmit={(e) => this.logar(e)}>
						<img src={photo} className="photo" alt="icone da tela de login" />

						<label>Usuário</label>
						<input
							type="text"
							placeholder="Usuário"
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
							required
						/>

						<label>Senha</label>
						<input
							type="password"
							placeholder="Senha"
							value={this.state.senha}
							onChange={(e) => this.setState({ senha: e.target.value })}
						/>
						<br />
						
            <button className="button-login">Acessar</button>
						
            <br />
						
            <a
							href="https://menostinta.com.br/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Não possui conta? Cadastre-se!
						</a>
					</form>
				</div>
			</div>
		);
	}
}
export default Login;
