import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA56fRmE1FT3PBw8_XLqEAnIJW93jcHMtc",
  authDomain: "whatsapp-clone-d2232.firebaseapp.com",
  projectId: "whatsapp-clone-d2232",
  storageBucket: "whatsapp-clone-d2232.appspot.com",
  messagingSenderId: "114130959661",
  appId: "1:114130959661:web:653a145ade9f4d781227a4",
  measurementId: "G-7G7SMBKGGV",
});

export const auth = firebase.auth();
export default app;
