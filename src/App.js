import './App.css';
import React from "react"
import Navbar from './component/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar/>
			<Switch>
				<Route path="/"/>
			</Switch>
		</Router>
	);
}

export default App;
