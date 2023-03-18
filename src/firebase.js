// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlwdwx-hv4Why5BhUNK0ARbatQAGm_pEM",
  authDomain: "netflix-react-app-7a7aa.firebaseapp.com",
  projectId: "netflix-react-app-7a7aa",
  storageBucket: "netflix-react-app-7a7aa.appspot.com",
  messagingSenderId: "305498370143",
  appId: "1:305498370143:web:df3c6b4a39c060ee9f6bea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const db = getFirestore(app)