import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPoCUGYuNkUZqJ3OflwGv69iLNp_C_MCI",
    authDomain: "happynotes-587da.firebaseapp.com",
    projectId: "happynotes-587da",
    storageBucket: "happynotes-587da.appspot.com",
    messagingSenderId: "13667394396",
    appId: "1:13667394396:web:61ecb338cb1a323acd5799"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const auth = fb.auth();
export const db = fb.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

