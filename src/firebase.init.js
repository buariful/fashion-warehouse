// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4EeQhRUg-YZhxc1CrNihtnbJoJ2z25T4",
    authDomain: "fashion-warehouse-23c06.firebaseapp.com",
    projectId: "fashion-warehouse-23c06",
    storageBucket: "fashion-warehouse-23c06.appspot.com",
    messagingSenderId: "248457447498",
    appId: "1:248457447498:web:0d0b76040fc76ac0c5beb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;