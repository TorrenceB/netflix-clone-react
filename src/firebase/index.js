import firebase from 'firebase';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4sRu3bCFpHG2vSSPvHxAATpwrkwGMD-U",
  authDomain: "netflix-clone-ceb9d.firebaseapp.com",
  databaseURL: "https://netflix-clone-ceb9d.firebaseio.com",
  projectId: "netflix-clone-ceb9d",
  storageBucket: "netflix-clone-ceb9d.appspot.com",
  messagingSenderId: "893265710648",
  appId: "1:893265710648:web:a7bcbbf6c4ba717cbe60cd",
  measurementId: "G-M0BWWW19Z1",
};
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default {
    firebase, db
}
