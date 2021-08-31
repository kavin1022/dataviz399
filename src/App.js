import './App.css';
import React from "react"
import Navbar from "./component/navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Activities from './pages/Activities';
import HeartRate from './pages/HeartRate';
import Nutrition from './pages/Nutrition';
import Sleep from './pages/Sleep';
import Wellness from './pages/Wellness';

function App() {
	return (
		<Router>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/activities" component={Activities}/>
				<Route path="/heartrate" component={HeartRate}/>
				<Route path="/nutrition" component={Nutrition}/>
				<Route path="/sleep" component={Sleep}/>
				<Route path="/wellness" component={Wellness}/>
			</Switch>
		</Router>
	);
}

export default App;
