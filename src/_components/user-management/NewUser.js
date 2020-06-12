import React, { useState } from "react";
import { Col, Row, Button, Modal, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import imgTeste from "../../_imgs/user-circle.svg";
// import UserInsert from './UserInsert';

import "./User-Management.css";

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
						{/* <UserInsert /> */}
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default NewUser;
