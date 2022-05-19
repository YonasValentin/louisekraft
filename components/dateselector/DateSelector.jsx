import format from 'date-fns/format';
import React, { useState } from 'react';
import daLocale from 'date-fns/locale/da';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, 'd MMM yyyy', { locale: this.locale });
  }
}

function DateSelector() {
  const [value, setValue] = useState(null);

  console.log({ value: value && value.toLocaleString() });

  function disableWeekdays(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  /*function disableTime(timeValue, clockType) {
    if (
      clockType === 'hours' && if (isTimeBetween)
    ) {
      return true;
    }
  } */

  /*function disableTime(timeValue, clockType) {
    if (clockType === 'hours') {
      if (isTimeBetween(timeValue, 0, 8) || isTimeBetween(timeValue, 20, 24)) {
        return true;
      }
    }
  }

  function isTimeBetween(timeValue, startTime, endTime) {
    return timeValue >= startTime && timeValue < endTime;
  } */

  return (
    <LocalizationProvider
      utils={LocalizedUtils}
      locale={daLocale}
      dateAdapter={AdapterDateFns}
    >
      <DateTimePicker
        //shouldDisableTime={disableTime}
        minTime={new Date(0, 0, 0, 12)}
        maxTime={new Date(0, 0, 0, 16)}
        shouldDisableDate={disableWeekdays}
        minutesStep={30}
        format='HH:mm dd/MM/yyyy'
        hideTodayButton
        disablePast
        ampm={false}
        renderInput={(props) => <TextField {...props} />}
        label='Vælg dato og klokkeslæt'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

export default DateSelector;
