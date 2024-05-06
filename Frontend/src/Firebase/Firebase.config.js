// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvSMaCz3Kr9NdR82dErrWskOL-4TIyeAY",
    authDomain: "cars-cart.firebaseapp.com",
    projectId: "cars-cart",
    storageBucket: "cars-cart.appspot.com",
    messagingSenderId: "916823114839",
    appId: "1:916823114839:web:f2d976854afb46ae780f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;