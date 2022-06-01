import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from '/firebase-config';
import daLocale from 'date-fns/locale/da';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import format from 'date-fns/format';
import TimePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, 'd MMM yyyy', { locale: this.locale });
  }
}

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedTime, setSelectedTime] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [selectedBookingDates, setSelectedBookingDates] = useState([]);
  const [selectedBookingTime, setSelectedBookingTime] = useState([]);
  const defaultTimes = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
  ];
  const [availableTimes, setAvailableTimes] = useState([]);

  const [formLabelText, setFormLabelText] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState();

  useEffect(() => {
    fetch('https://wp.louisekraft.dk/wp-json/wp/v2/posts?include=18')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFormLabelText(data);
        console.log(data);
      });
  }, []);

  function disableWeekdays(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        firstname: firstName,
        lastname: lastName,
        email: email,
        service: service,
        phone: phone,
        date: selectedDate,
        time: selectedTime,
      });
      console.log('Document written with ID: ', docRef.id);
      alert('Your message has been sent successfully');
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setService('');
    setPhone('');
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const appointmentsRef = collection(db, 'appointments');

  async function getDate(selectedDate) {
    setSelectedDate(selectedDate); // setSelectedDate - den der vises i datepicker
    console.log(selectedDate);

    const bookingDates = []; // til at holde de eksisterende bookinger fra firebase, der matcher selectedDate
    const bookingTimes = [];

    const querySnapshot = await getDocs(appointmentsRef);
    querySnapshot.forEach((doc) => {
      const booking = doc.data();
      const bookingDate = booking.date.toDate(); // konverter booking.date til en date der kan læses i JS

      if (
        bookingDate.getFullYear() === selectedDate.getFullYear() &&
        bookingDate.getDate() === selectedDate.getDate() &&
        bookingDate.getMonth() === selectedDate.getMonth()
      ) {
        bookingDates.push(bookingDate); // gemmer bookingDate i bookingDates
        const bookingTime = booking.time.toDate();
        bookingTimes.push(
          bookingTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        );
      }
    });

    console.log(bookingDates);
    setSelectedBookingDates(bookingDates); // sætter state, selectedBookingDates, med alle de eksisterende bookingdatoer
    setSelectedBookingTime(bookingTimes);
    console.log(bookingTimes);
    setTimes(bookingTimes);
    // Her bookingDates skal bruges til at disable tider i TimePicker
  }

  function setTimes(bookingTimes) {
    console.log(bookingTimes);

    const results = defaultTimes.filter((time) => {
      console.log(bookingTimes, time);
      if (!bookingTimes.includes(time)) {
        return time;
      }
    });
    console.log(results);
    setAvailableTimes(results);
  }

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <div className='booking-form__container'>
        <label>
          <span>{formLabelText[0]?.acf?.firstname}</span>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id='firstname'
            type='text'
            placeholder='Indtast fornavn'
            required
          ></input>
        </label>

        <label>
          <span>{formLabelText[0]?.acf?.lastname}</span>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id='lastname'
            type='text'
            placeholder='Indtast efternavn'
            required
          ></input>
        </label>

        <label>
          <span>{formLabelText[0]?.acf?.email}</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type='email'
            placeholder='Indtast email'
            required
          ></input>
        </label>

        <label>
          <span>{formLabelText[0]?.acf?.phone}</span>
          <input
            value={phone}
            placeholder='Indtast telefonnummer'
            onChange={(e) => setPhone(e.target.value)}
            id='phone'
            type='tel'
            required
          ></input>
        </label>

        <label>
          <span>{formLabelText[0]?.acf?.ydelse}</span>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            id='services'
            required
            defaultValue={'default'}
          >
            <option disabled value={'default'}>
              Choose
            </option>
            <option value={'one'}>Udredning for ordblind</option>
            <option value={'two'}>Netværksmøde med forældre og skole</option>
            <option value={'three'}>
              Vejledning og undervisning i brug af hjælpemidler i skolens fag
            </option>
          </select>
        </label>

        <label>
          <span>{formLabelText[0]?.acf?.dateandtime}</span>

          <LocalizationProvider
            utils={LocalizedUtils}
            locale={daLocale}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              shouldDisableDate={disableWeekdays}
              renderInput={(props) => <TextField {...props} />}
              value={selectedDate}
              onChange={getDate}
              disablePast
            ></DatePicker>
          </LocalizationProvider>
        </label>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Tidspunkt</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={selectedTime}
              label='Tidspunkt'
              onChange={(e) => setSelectedBookingTime(e.target.value)}
            >
              {availableTimes.map((time) => (
                <MenuItem value={time} key={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default BookingForm;
