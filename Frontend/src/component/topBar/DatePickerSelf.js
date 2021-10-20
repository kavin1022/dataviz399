import { useState } from "react";
import "./topBar.css";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {format} from "date-fns"

const DatePickerSelf = (props) => {
    return(
        <div className="dp">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={props.date}
                    format="YYYY-MM-DD"
                    onChange={(newValue) => {
                        props.setDate(format(newValue, "yyyy-MM-dd")); 
                        console.log(format(newValue, "yyyy-MM-dd"));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default DatePickerSelf