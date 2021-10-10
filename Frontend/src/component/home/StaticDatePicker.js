import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

function StaticDatePickers() {
    const [value, setValue] = React.useState(new Date());

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
            sx={{
                height: 300,
            }}
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
}

export default StaticDatePickers;