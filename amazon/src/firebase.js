import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCorEigGjQ3JhqPP8UM1zFnMjkuWENH114",
  authDomain: "clone-ba1d0.firebaseapp.com",
  projectId: "clone-ba1d0",
  storageBucket: "clone-ba1d0.appspot.com",
  messagingSenderId: "770555730677",
  appId: "1:770555730677:web:80a9a9f531760e486fc3bc",
  measurementId: "G-3EV8VP0RZH",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default db;

// to deploy on firebase
// step 01: npm install -g firebase-tools
// step 02: firebase init
// if error occurs run Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
// step 03 : directory public option ? build
// step 04: npm run build
// step 05: firebase deploy
