import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD8cMkj0nx8o4nIA5_IJvFn_Ya3Lq3IuGE",
  authDomain: "facebook-clone-9b2c2.firebaseapp.com",
  projectId: "facebook-clone-9b2c2",
  storageBucket: "facebook-clone-9b2c2.appspot.com",
  messagingSenderId: "1053280227402",
  appId: "1:1053280227402:web:8c710d437ad8e8afbd96b3",
  measurementId: "G-FEYMY5YXMP"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
