import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUYSHMG7bGxpo0jgzrJtbEqafRVjdQGQw",
  authDomain: "udemy-ninja-smoothies-38569.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-38569.firebaseio.com",
  projectId: "udemy-ninja-smoothies-38569",
  storageBucket: "udemy-ninja-smoothies-38569.appspot.com",
  messagingSenderId: "175757104989",
  appId: "1:175757104989:web:74f712491b1e7dc9acfab4",
  measurementId: "G-TFQ26NV01S"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

//export firestore database
export default firebaseApp.firestore();
