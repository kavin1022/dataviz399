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
                        const max = new Date("March 31, 2020 23:59:59")
                        if(newValue > max){
                            alert("Data doesn't exist, please select a date between 2019-11-01 to 2020-03-31")
                        }else{
                            props.setDate(format(newValue, "yyyy-MM-dd")); 
                        }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default DatePickerSelf