import { useState } from 'react';
import CalendarTemplate from 'availability-calendar-react';

function DateSelector() {
  const [availability, setAvailability] = useState([]);

  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
    primaryColor: '#CCCCCC',
    secondaryColor: '#EEEEEE',
    primaryFontColor: '#444444',
    fontFamily: 'Roboto',
    fontSize: 14,
    startTime: '5:00',
    endTime: '22:00',
    availability,
    setAvailability,
  });
  return <Calendar />;
}

export default DateSelector;

/*
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import subDays from 'date-fns/subDays';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import da from 'date-fns/locale/da';
registerLocale('da', da);

function DateSelector() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 12)
  );

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <main>
      <DatePicker
        locale='da'
        showTimeSelect
        dateFormat='dd/MM/yyyy'
        timeFormat='HH:mm'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        closeOnScroll={true}
        filterDate={isWeekday}
        timeIntervals={60}
        timeCaption='Tid'
        //inline
        withPortal
        minTime={setHours(setMinutes(new Date(), 0), 12)}
        maxTime={setHours(setMinutes(new Date(), 0), 20)}
      />
    </main>
  );
}

export default DateSelector;

*/
