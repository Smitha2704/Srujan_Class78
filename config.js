import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDNKxZl6TPSmG-0FPDxmgXx1s2x_PKuRic",
    authDomain: "booksantav1.firebaseapp.com",
    databaseURL: "https://booksantav1.firebase.io",
    projectId: "booksantav1",
    storageBucket: "booksantav1.appspot.com",
    messagingSenderId: "1066298725178",
    appId: "1:1066298725178:web:05a2b2355841fa5e67f603"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();