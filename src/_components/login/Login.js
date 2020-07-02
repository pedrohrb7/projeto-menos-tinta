import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Login extends Component {
	constructor(props) {
        super(props);
        this.state={
            email:'',
            senha:'',
            logado: false
		};
	}	

	logar(event) {
		event.preventDefault();
		const { history } = this.props;
		const {email,senha} = this.state;
		var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};
		
		if(email === "" & senha==="") {
			alert("Por favor digite um usuário e senha");
		}
		else {
			fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Login?"+this.state.email+"&"+this.state.senha)
			.then((response)=>{console.log(response)}).then(data=>{})
            .catch((err)=>console.error(err))	

		}
	}
	render() {
		return (
			<>
				<Form onSubmit={(e)=>this.logar(e)}>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="with a placeholder"
							value={this.state.email}
							onChange={(e)=>this.setState({email:e.target.value})}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="password placeholder"
							value={this.state.senha}
							onChange={(e)=>this.setState({senha:e.target.value})}
						/>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</>
		);
	}
}
