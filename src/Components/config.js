import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDk3O8hTNHIsNm2P-trwzqR2HODrW9EuFA",
  authDomain: "examlogindev.firebaseapp.com",
  projectId: "examlogindev",
  storageBucket: "examlogindev.appspot.com",
  messagingSenderId: "463017241228",
  appId: "1:463017241228:web:48eedddafb019f825de9a9"
});

const db = firebase.firestore();

export const auth = app.auth()
export default app
export {app, db}

