import './App.css';
import React, { useEffect, useState } from "react"
import Navbar from "./component/navbar/Navbar"
import TopBar from './component/topBar/TopBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Activities from "./pages/activities/Activities"
import HeartRate from './pages/HeartRate';
import Nutrition from './pages/Nutrition';
import Sleep from './pages/Sleep/Sleep';
import Wellness from './pages/Wellness';
import PurpleBack from './component/topBar/PurpleBack';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Clinician from './pages/clinician/clinician';

import allPageFetch from './component/Fetch/allPageFetch';
import CircularProgress from '@material-ui/core/CircularProgress';
import homeFetch from './component/Fetch/homeFetch';

//start server with: npx json-server --watch patientData/p01/steps.json --port 8000

function App() {

	const [loggedIn, setLoggedIn] = useState(false);
	const [date, setDate] = useState("2020-03-31");
	const [homeLoading, setHomeLoading] = useState(false);
	const [sleepLoading, setSleepLoading] = useState(false);
	const [activLoading, setActivLoading] = useState(false);

	/* Sleep States */
	const [efficiency, setEfficiency] = useState(0);
    const [wentToSleep, setWentToSleep] = useState(0);
    const [wakeUp, setwakeUp] = useState(0);
    const [timeInBed, setTimeInBed] = useState(0);
    const [sleepLineLabel, setSleepLineLabel] = useState(0);
    const [sleepLineData, setSleepLineData] = useState(0);
    const [sleepStagesData, setSleepStagesData] = useState(0);

	/* Activities States */
    // Featured info states
    const [stepValue, setStepValue] = useState();
    const [distanceValue, setDistanceValue] = useState();
    const [exerciseValue, setExerciseValue] = useState();
    const [caloriesValue, setCaloriesValue] = useState();
    // Ring Chart 
    const [ringLabel, setRingLabel] = useState(["Running", "Walking"]);
    const [ringData, setRingData] = useState();
    const [runTime, setRunTime] = useState(0);
    const [walkTime, setWalkTime] = useState(0);

   // Bar Graph 
    const [totalCalories, setTotalCalories] = useState();
    const [barLabel, setBarLabel] = useState();
    const [barData, setBarData] = useState();

	/* Home States */
	const [stepsHome, setStepsHome] = useState(false);
	const [stepLineLabels, setStepLineLabels] = useState([""]);
	const [stepLineData, setStepLineData] = useState([0]);
	const [homeTotalCalories, setHomeTotalCalories] = useState(0);


	useEffect(async() => {
		if (loggedIn){
			setSleepLoading(true);
			setHomeLoading(true);
			setActivLoading(true);
			
			await allPageFetch(date, 
				setSleepLoading, setActivLoading,
				setDistanceValue, setExerciseValue, setCaloriesValue, setRingLabel, setRingData, setRunTime, setWalkTime, setTotalCalories, setBarLabel, setBarData, setStepValue,
				setTimeInBed, setWentToSleep, setEfficiency, setwakeUp, setSleepStagesData, setSleepLineData, setSleepLineLabel, setHomeTotalCalories
			);
			await homeFetch(date, setHomeLoading, setStepsHome, setStepLineLabels, setStepLineData);
				
			console.log(sleepLoading && homeLoading && activLoading);
		}
	},[date])

	return (
		<div>
			
			{(sleepLoading && homeLoading && activLoading) && <div className="loading"><CircularProgress/></div>}

			<Router>
				{loggedIn && <Navbar/>}
				<Switch>
					<Route path="/login" exact render={() => <SignIn setLoggedIn={setLoggedIn} setDate={setDate} />} />
					<Route path="/register" exact component={Register} />

						{!sleepLoading && !homeLoading && !activLoading && <div>
						<Route path="/" exact render={() => 
							<Home
								date={date} 
								setDate={setDate}
								stepsHome={stepsHome}
								stepLineData={stepLineData}
								stepLineLabels={stepLineLabels}
								sleepLineData={sleepLineData}
								timeInBed={timeInBed}
								homeTotalCalories={homeTotalCalories}
							/>} 
						/>

						<Route path="/activities" render={() => 
							<Activities 
								date={date} 
								setDate={setDate}
								stepValue={stepValue}
								distanceValue={distanceValue}
								exerciseValue={exerciseValue}
								caloriesValue={caloriesValue}
								ringLabel={ringLabel}
								ringData={ringData}
								runTime={runTime}
								walkTime={walkTime}
								totalCalories={totalCalories}
								barLabel={barLabel}
								barData={barData}
							/>
						}/>

						<Route path="/heartrate" component={HeartRate}/>

						<Route path="/nutrition" component={Clinician}/>

						<Route path="/sleep" render={() => 
							<Sleep 
								date={date} 
								setDate={setDate} 
								efficiency={efficiency} 
								wentToSleep={wentToSleep} 
								wakeUp={wakeUp}
								timeInBed={timeInBed}
								sleepLineLabel={sleepLineLabel}
								sleepLineData={sleepLineData}
								sleepStagesData={sleepStagesData}
							/>
						}/>

						<Route path="/wellness" component={SignIn}/>

						</div>}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
