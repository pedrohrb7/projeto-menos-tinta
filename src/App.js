import React from "react";

// import TicketingPage from './components/TicketingPage';
import UserList from "./pages/UserList";

function App() {
	return (
		<div className="App">
			{/* Aqui deve conter apenas a tela de login, pois é a tela principal */}
			<UserList />
			{/* <TicketingPage/> */}
		</div>
	);
}

export default App;
