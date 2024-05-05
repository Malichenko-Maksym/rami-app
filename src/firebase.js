import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNIv7ym8y8xpyLa2M0woH2VPka7vf5ok4",
  authDomain: "rami-app-2f3b8.firebaseapp.com",
  projectId: "rami-app-2f3b8",
  storageBucket: "rami-app-2f3b8.appspot.com",
  messagingSenderId: "864627467822",
  appId: "1:864627467822:web:65f30dd2b4d486428761bf",
  measurementId: "G-S79QC1YFEG"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;