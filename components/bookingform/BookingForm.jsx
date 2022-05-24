import DateSelector from '../dateselector/DateSelector';
import React, { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '/firebase-config';

function BookingForm() {
  const [formLabelText, setFormLabelText] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  /*

  useEffect(() => {
    const fetchAppointmentsText = async () => {
      const data = await fetch(
        'https://wp.louisekraft.dk/wp-json/wp/v2/appointments?acf_format=standard'
      );
      const json = await response.json();
      console.log(json);

      setData(json);

      fetchAppointmentsText().catch((err) => console.log(err));
    };
  }, []);

  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        firstname: firstName,
        lastname: lastName,
        email: email,
        service: service,
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fornavn
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id='firstname'
          type='text'
          placeholder='Indtast fornavn'
        ></input>
      </label>

      <label>
        Efternavn
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id='lastname'
          type='text'
          placeholder='Indtast efternavn'
        ></input>
      </label>

      <label>
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          type='email'
          placeholder='Indtast email'
        ></input>
      </label>

      <label>
        Hvilken ydelse ønsker du at booke?
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          id='services'
        >
          <option>Udredning for ordblind</option>
          <option>Netværksmøde med forældre og skole</option>
          <option>
            Vejledning og undervisning i brug af hjælpemidler i skolens fag
          </option>
        </select>
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookingForm;
