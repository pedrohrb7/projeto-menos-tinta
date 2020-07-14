import React, { useState } from "react";
import { Col, Row, Modal, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imgTeste from "../../_imgs/user-circle.svg";
import UserDelete from "./UserDelete";

import "./User-Management.css";

function ModalDeleteUser(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

	return (
		<div className="container">
			<div className="btn-new-user">
				<div>
					<span>{deleteIcon}</span>
					<h4 onClick={handleShow}>Exlcuir</h4>
				</div>
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
						<UserDelete />
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default ModalDeleteUser;
