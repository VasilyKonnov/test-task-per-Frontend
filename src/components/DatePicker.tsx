import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { nullifyDateFromTo, getDateFromTo } from '../redux/actions';

const CustomDatePicker = (props: any) => {

  const { nullifyDateFromTo, getDateFromTo, dateFromTo, starDateFromTo } = props;


  // new Date(starDateFromTo.dateFrom ? starDateFromTo.dateFrom : )


  let startDate = new Date('2021-01-15')
  let andDate = new Date()

  if (starDateFromTo.dateTo && starDateFromTo.dateFrom) {
    startDate = new Date(starDateFromTo.dateTo)
    andDate = new Date(starDateFromTo.dateFrom)
  }
  if (!dateFromTo.dateTo && !dateFromTo.dateFrom && !starDateFromTo.dateTo && !starDateFromTo.dateFrom) {
    startDate = new Date('2021-01-15')
    andDate = new Date()
  }

  console.log('starDateFromTo ', starDateFromTo)
  const [selectedDateFrom, handleDateFromChange] = useState<any>(startDate);
  const [selectedDateTo, handleDateToChange] = useState<any>(andDate);


  function formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }


  // console.log('selectedDateTo  typeof ', typeof (selectedDateTo))




  useEffect(() => {

    console.log('selectedDateTo formatDate() ', formatDate(selectedDateTo))

    let from = formatDate(selectedDateFrom)
    let to = formatDate(selectedDateTo)

    if (from !== 'NaN-NaN-NaN' && to !== "NaN-NaN-NaN" && from !== undefined && to !== undefined) {
      console.log('from ', from);
      console.log('to ', to);

      getDateFromTo({
        dateFrom: from,
        dateTo: to
      })
    }

  }, [selectedDateFrom, selectedDateTo, starDateFromTo.dateTo, starDateFromTo.dateFrom]);


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
      </div>
    </MuiPickersUtilsProvider>
  );
}

const mapStateToProps = (state: any) => {
  return {
    dateFromTo: state.leagues.dateFromTo,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getDateFromTo: (respons: object) => dispatch(getDateFromTo(respons)),
    nullifyDateFromTo: () => dispatch(nullifyDateFromTo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDatePicker)