import React from "react";

import UserList from "./pages/UserList";
// import Login from "./pages/Login";

function App() {
	return (
		<div className="App">
			{/* Aqui deve conter apenas a tela de login, pois é a tela principal */}
			{/* <Login /> */}
			<UserList />
		</div>
	);
}

export default App;
