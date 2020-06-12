import React from "react";
import Menu from "../_components/menu/Menu";
import SideMenu from "../_components/menu/SideMenu";
import UserManagement from "../_components/user-management/User-Management";
import { Row, Col } from "reactstrap";

function UserList() {
	return (
		<>
			<Menu />
			<Row>
				{/* <div style={{ display: "flex" }}> */}
				<Col sm={4}>
					<SideMenu />
				</Col>
				<Col sm={8}>
					<UserManagement />
				</Col>
				{/* </div> */}
			</Row>
		</>
	);
}

export default UserList;
