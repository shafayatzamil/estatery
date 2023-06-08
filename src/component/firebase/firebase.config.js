// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASlTqmB8rBLs8lW5Fjy2vtXt4mvpJD-ec",
  authDomain: "estatery-728bc.firebaseapp.com",
  projectId: "estatery-728bc",
  storageBucket: "estatery-728bc.appspot.com",
  messagingSenderId: "974098875315",
  appId: "1:974098875315:web:5a3fadf18b4cb1e6b341c6",
  measurementId: "G-Q7529BSJS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
