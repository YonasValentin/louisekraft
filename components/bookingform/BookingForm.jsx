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
        const bookingTime = booking.time.toDate().getHours();
        bookingTimes.push(bookingTime);
        console.log(bookingTime);
      }
    });

    console.log(bookingDates);
    setSelectedBookingDates(bookingDates); // sætter state, selectedBookingDates, med alle de eksisterende bookingdatoer
    setSelectedBookingTime(bookingTimes);
    console.log(bookingTimes);

    // Her bookingDates skal bruges til at disable tider i TimePicker
  }

  return (
    <form onSubmit={handleSubmit}>
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

        <TimePicker
          value={selectedTime}
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 16)}
          selected={selectedTime}
          onChange={(time) => setSelectedTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption='Time'
          dateFormat='HH:mm'
          timeFormat='HH:mm'
          excludeTimes={[selectedBookingTime]}
        ></TimePicker>
      </label>

      <audio controls src={formLabelText[0]?.acf?.audio}></audio>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookingForm;
