import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD1GPHjZ1FuepBGkMlQE_cquCsGyV6FP8",
  authDomain: "api-project-479801270858.firebaseapp.com",
  databaseURL: "https://api-project-479801270858.firebaseio.com",
  projectId: "api-project-479801270858",
  storageBucket: "api-project-479801270858.appspot.com",
  messagingSenderId: "479801270858",
  appId: "1:479801270858:web:82d4ebf8de4b0ed4b9fcb3",
  measurementId: "G-2TW0PKXH8B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// export const firestore = firebase.firestore();
