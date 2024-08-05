// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4PySvTXXCmBkCGeePRwgC9um233HYFNY",
  authDomain: "pantry-management-e473d.firebaseapp.com",
  projectId: "pantry-management-e473d",
  storageBucket: "pantry-management-e473d.appspot.com",
  messagingSenderId: "822027595672",
  appId: "1:822027595672:web:de4ba130ecf36c4e3505ed",
  measurementId: "G-GR3CYXQ7K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage }
