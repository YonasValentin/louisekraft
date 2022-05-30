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
