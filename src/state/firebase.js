import * as Firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB08YwbhdvTjFRFAn1jjYMdyKgdlvDeTEw',
  authDomain: 'supaleihladen.firebaseapp.com',
  databaseURL: 'https://supaleihladen.firebaseio.com',
  projectId: 'supaleihladen',
  storageBucket: 'supaleihladen.appspot.com',
  messagingSenderId: '824861888071',
  appId: '1:824861888071:web:f0faa1d1486c62ea',
};

function initFirebase() {
  Firebase.initializeApp(firebaseConfig);
  return new Promise((resolve, reject) => {
    Firebase.firestore().enablePersistence()
      .then(resolve)
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          reject(err);
          /*  Multiple tabs open, persistence can only be
              enabled in one tab at a a time. */
        } else if (err.code === 'unimplemented') {
          reject(err);
          /*  The current browser does not support all of
              the features required to enable persistence */
        }
      });
  });
}

export { Firebase, initFirebase };
