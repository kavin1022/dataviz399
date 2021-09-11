import './App.css';
import React from "react"
import Navbar from "./component/navbar/Navbar"
import TopBar from './component/topBar/TopBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Activities from "./pages/activities/Activities"
import HeartRate from './pages/HeartRate';
import Nutrition from './pages/Nutrition';
import Sleep from './pages/Sleep';
import Wellness from './pages/Wellness';

//start server with: npx json-server --watch patientData/p01/steps.json --port 8000

function App() {

	return (
		<Router>
			<TopBar/>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={Home} />
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
