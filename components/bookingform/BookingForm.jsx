import React, { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '/firebase-config';
import daLocale from 'date-fns/locale/da';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import format from 'date-fns/format';

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, 'd MMM yyyy', { locale: this.locale });
  }
}

function BookingForm() {
  const [value, setValue] = useState(null);

  const [formLabelText, setFormLabelText] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [service, setService] = useState('');

  /*
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        'https://wp.louisekraft.dk/wp-json/wp/v2/appointments?acf_format=standard'
      );
      response = await response.json();
      setFormLabelTexts(response);
      console.log(response);
    }
    fetchData();
  }, []);
  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          'https://wp.louisekraft.dk/wp-json/wp/v2/appointments?acf_format=standard'
        );
        if (response.status === 200) {
          let data = await response.json();
          setFormLabelText(data);
          console.log(data);
        } else {
          throw 'error';
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log({ value: value && value.toLocaleString() });

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
        date: value,
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
    setValue(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>{formLabelText?.acf?.firstname}</span>
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
        Hvilken ydelse ønsker du at booke?
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          id='services'
          required
        >
          <option>Udredning for ordblind</option>
          <option>Netværksmøde med forældre og skole</option>
          <option>
            Vejledning og undervisning i brug af hjælpemidler i skolens fag
          </option>
        </select>
      </label>

      <label>
        Vælg tid og dato
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
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookingForm;
