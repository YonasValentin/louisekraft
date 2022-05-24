/*import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDlKhz4qeNJXWMBDRuKdMJM8CexdGaiBUI',
  authDomain: 'louisekraft-97a2e.firebaseapp.com',
  projectId: 'louisekraft-97a2e',
  storageBucket: 'louisekraft-97a2e.appspot.com',
  messagingSenderId: '566687608647',
  appId: '1:566687608647:web:86d38c38d0bb6994432662',
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

/*

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export default db = getFirestore(app);
*/

/*
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
*/

//const db = getFireStore(app);

/*
<label>
Hvilken ydelse ønsker du at booke?
<select
  //value={service}
  onChange={(e) => setService(e.target.value)}
  id='service'
>
  <option>Udredning for ordblind</option>
  <option>Netværksmøde med forældre og skole</option>
  <option>
    Vejledning og undervisning i brug af hjælpemidler i skolens fag
  </option>
</select>
</label>

<label>
Vælg dato og tid
<DateSelector />
</label>
*/
