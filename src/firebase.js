import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
const config = {
  apiKey: "AIzaSyBTkovBwVkRW_RtmJVzPJ1VhSqM320h-pc",
  authDomain: "sfma-spoleto.firebaseapp.com",
  databaseURL: "https://sfma-spoleto.firebaseio.com",
  projectId: "sfma-spoleto",
  storageBucket: "sfma-spoleto.appspot.com",
  messagingSenderId: "471734739457",
  appId: "1:471734739457:web:82746d72b9aa92fca1d600",
  measurementId: "G-36MBGFZ2MX"
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore()

const firebaseAuth = firebase.auth()

const registrationsRef = db.collection('registrations')
const healthsRef = db.collection('healths')
const parkingsRef = db.collection('parkings')
const aboutusersRef = db.collection('aboutusers')
const abouttripsRef = db.collection('abouttrips')
const yourpeopleRef = db.collection('yourpeople')
const sleepingarrangementsRef = db.collection('sleepingarrangements')

export { registrationsRef, healthsRef, parkingsRef, aboutusersRef, abouttripsRef, yourpeopleRef, sleepingarrangementsRef, firebaseAuth }
