import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCL4X2RZnojduZNtpgr__Z9ljOrwP_2S8g",
  authDomain: "clone-77e58.firebaseapp.com",
  projectId: "clone-77e58",
  storageBucket: "clone-77e58.appspot.com",
  messagingSenderId: "312485732551",
  appId: "1:312485732551:web:0c3c8b059fe0680083dee2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
