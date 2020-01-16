import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBvK_CW9HGyi5zumQ-xQavMFemNEZgVs0s",
  authDomain: "net-ninja-marioplan-dbbe5.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-dbbe5.firebaseio.com",
  projectId: "net-ninja-marioplan-dbbe5",
  storageBucket: "net-ninja-marioplan-dbbe5.appspot.com",
  messagingSenderId: "423926978215",
  appId: "1:423926978215:web:92ad8198910637d3a36d82",
  measurementId: "G-CZH292V3F0"
};
firebase.initializeApp(config);
/* firebase.firestore().settings({ timestampsInSnapshots: true }); */

export default firebase;