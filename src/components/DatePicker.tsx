import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const CustomDatePicker = (props: any) => {
  const [selectedDateFrom, handleDateFromChange] = useState<any>(new Date());
  const [selectedDateTo, handleDateToChange] = useState<any>(new Date());

  console.log('selectedDateFrom ', selectedDateFrom.toISOString().substr(0, 10));
  console.log('selectedDateTo ', selectedDateTo.toISOString().substr(0, 10));

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <div className="date-pickers-wrap">
        <KeyboardDatePicker
          autoOk
          variant="inline"
          label="date from"
          format="yyyy-MM-dd"
          value={selectedDateFrom}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date: any) => handleDateFromChange(date)}
        />
        <KeyboardDatePicker
          autoOk
          variant="inline"
          label="date to"
          format="yyyy-MM-dd"
          value={selectedDateTo}
          InputAdornmentProps={{ position: "start" }}
          onChange={(date: any) => handleDateToChange(date)}
        />
        <button>Фильтровать</button>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default CustomDatePicker;