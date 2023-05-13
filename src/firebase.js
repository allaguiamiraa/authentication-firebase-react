import firebase from "firebase/compat/app"
import  "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCU7LmnOqYMma4Y3LDaPUMRQU8wGnMTOV8",
  authDomain: "auth-development-94690.firebaseapp.com",
  projectId: "auth-development-94690",
  storageBucket: "auth-development-94690.appspot.com",
  messagingSenderId: "806871418682",
  appId: "1:806871418682:web:fdd0d63f3b0045571f3203",
  measurementId: "G-TL232RD4ZB"
};
firebase.initializeApp(firebaseConfig);
export default firebase