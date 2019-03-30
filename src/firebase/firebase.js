// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDtKHCGn8bLDkyYhoeC0yVzmCkVdnESgBM",
  authDomain: "personal-website-1dc49.firebaseapp.com",
  databaseURL: "https://personal-website-1dc49.firebaseio.com",
  projectId: "personal-website-1dc49",
  storageBucket: "personal-website-1dc49.appspot.com",
  messagingSenderId: "1067764282041"
};

firebase.initializeApp(config)

const db = firebase.database()

export default db 
