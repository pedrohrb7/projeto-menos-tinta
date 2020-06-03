import React, { useState } from "react";
import { Col, Form, Row, Button, Modal, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import imgTeste from "../../imgs/user-circle.svg";
import "./UserManagement.css";

function NewUser(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="container">
			<div className="btn-new-user">
				<Button variant="primary" onClick={handleShow} className="btn-custom">
					Cadastrar Novo Usuário
				</Button>
			</div>

			<Modal
				show={show}
				onHide={handleClose}
				{...props}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Row>
						<Col xs={6} md={4}>
							<Image fluid src={imgTeste} roundedCircle />
						</Col>
					</Row>
				</Modal.Header>

				<Modal.Body>
					<div className="container content">
						<Form>
							<Form.Group controlId="formName">
								<Form.Label className="label-form">Nome</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="formPassword">
								<Form.Label className="label-form">Senha</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Form.Group controlId="formEmail">
								<Form.Label className="label-form">Email</Form.Label>
								<Form.Control type="email" placeholder="Email" />
							</Form.Group>

							<Form.Group controlId="formDepto">
								<Form.Label className="label-form">Departamento</Form.Label>
								<Form.Control type="text" placeholder="Departamento" />
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={handleClose} className="btn-save-change btn-custom">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default NewUser;
