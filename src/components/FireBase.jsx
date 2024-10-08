
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvuaXhMmIASR3c-07i4r7P8113JPsSN3M",
    authDomain: "gulf-ulinkit.firebaseapp.com",
    projectId: "gulf-ulinkit",
    storageBucket: "gulf-ulinkit.appspot.com",
    messagingSenderId: "764071712818",
    appId: "1:764071712818:web:27baaa9d2cd9eab569842b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };