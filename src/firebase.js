import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIgMs9ICSywkiPPlr0ERSlEqeJj-v6c_E",
  authDomain: "netflix-clone-7ceca.firebaseapp.com",
  databaseURL: "https://netflix-clone-7ceca-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-7ceca",
  storageBucket: "netflix-clone-7ceca.appspot.com",
  messagingSenderId: "367353159690",
  appId: "1:367353159690:web:402b27bdde3615df27fff3",
  measurementId: "G-YS2S3GNS3E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
