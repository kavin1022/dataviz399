import React, { useState } from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";
import AFeaturedInfo from "../../component/activities/AFeaturedInfo"
import CaloriesBurntBar from "../../component/activities/CaloriesBurntBar";

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import BackgroudGrey from "../../component/topBar/BackgroundGrey";

import Slider from "@mui/material/Slider";

const Activities = () => {

    const[value, setValue] = useState();
    return (
        <div className="activities">
            <BackgroudGrey/>
            <div className = "zeroRow">
                {/*<h1 className="welcomeMessage" style={{color: "black"}}>Good work on staying active!</h1>*/}
                <div className="dp">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            value={value}
                            onChange={(newValue) => {setValue(newValue);}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className="firstRow">
                <AFeaturedInfo/>
                <AFeaturedInfo/>
                <AFeaturedInfo/>
                <AFeaturedInfo/>
            </div>

            <div className="secondRow">
                <ExerciseRing/>
                <CaloriesBurntBar/>
            </div>
            
        </div>
    )
}

export default Activities;