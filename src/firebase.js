import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBl-P1nPLJDfbaSmO77cjpMhW_TngvMcKI",
  authDomain: "instagram-clone-b6caa.firebaseapp.com",
  projectId: "instagram-clone-b6caa",
  storageBucket: "instagram-clone-b6caa.appspot.com",
  messagingSenderId: "351830481388",
  appId: "1:351830481388:web:94809402bed3b2b09808c9",
  measurementId: "G-LK8DGFKMFC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
