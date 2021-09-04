import React from "react";
import "./sleep.css"
import StaticDatePickers from "../component/home/StaticDatePicker";
import * as mdIcon from '@material-ui/icons';

const Sleep = () => {

    const style = {marginTop: "7px", marginRight: "1px"}
    return (
        <div className="sleep">
            <h1 className="welcomeMessage">Sleep</h1>

            <div className="rowOne">
                    <div className="sleepAnalysis">
                        <div className="AnalysisRow">
                            <div className="sleepKeyInfo">
                                
                                <mdIcon.Brightness3 fontSize="large" style={style}/>
                                <div className="test">
                                    <p className="analysisScore">21:45</p>
                                    <p className="analysisTitle">Went to Bed</p>
                                </div>
                            </div>
                            <div className="sleepKeyInfo">
                                <mdIcon.Alarm fontSize="large" style={style}/>
                                <div className="test">
                                    <p className="analysisScore">08:21</p>
                                    <p className="analysisTitle">Woke Up</p>
                                </div>
                            </div>
                            
                            <div className="sleepKeyInfo">
                                <mdIcon.AccessTime fontSize="large" style={style}/>
                                <div className="test">
                                    <p className="analysisScore">21:45</p>
                                    <p className="analysisTitle">Duration</p>
                                </div>
                            </div>
                        </div>

                        <div className="AnalysisRow">
                            <div className="sleepKeyInfo">
                                <mdIcon.Mood fontSize="large" style={style}/>
                                <div className="test">
                                    <p className="analysisScore">88%</p>
                                    <p className="analysisTitle">Sleep Quality</p>
                                </div>
                            </div>
                            <div className="sleepKeyInfo">
                                <mdIcon.BarChart fontSize="large" style={style}/>
                                <div className="test">
                                    <p className="analysisScore">92%</p>
                                    <p className="analysisTitle">Regularity</p>
                                </div>
                            </div>
                            <div className="sleepKeyInfo">
                                <mdIcon.Visibility fontSize="large" style={style}/>
                                <div className="test">
                                    <p className="analysisScore">01:23</p>
                                    <p className="analysisTitle">REM Time</p>
                                </div>
                        </div>
                        </div>
                    </div>
                <div className="datePickerContainer">
                    <StaticDatePickers/>
                </div>

            </div>

        </div>
    )
}

export default Sleep;