// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBaseConfig";

// Initialize Firebase

const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialize;
