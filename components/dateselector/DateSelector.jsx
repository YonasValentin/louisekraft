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

  return (
    <LocalizationProvider
      utils={LocalizedUtils}
      locale={daLocale}
      dateAdapter={AdapterDateFns}
    >
      <DateTimePicker
        /*shouldDisableTime={(timeValue, clockType) => {
          if (clockType === 'hours' && timeValue < 12) {
            return true;
          }
        }}*/
        //minTime={new Date(0, 1, 2, 3, 4, 5, 6)}
        //maxTime={new Date(0, 0, 0, 18, 30)}
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
