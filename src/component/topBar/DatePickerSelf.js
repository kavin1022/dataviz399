import { useState } from "react";
import "./topBar.css";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DatePickerSelf = () => {
    const[value, setValue] = useState();
    return(
        <div className="dp">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={value}
                    onChange={(newValue) => {setValue(newValue);}}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default DatePickerSelf