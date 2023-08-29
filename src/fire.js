// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC3oqNXDwinyE52s-kBbB0sq38ycP3Hcuw',
	authDomain: 'gulfstar-12185.firebaseapp.com',
	projectId: 'gulfstar-12185',
	storageBucket: 'gulfstar-12185.appspot.com',
	messagingSenderId: '406500348698',
	appId: '1:406500348698:web:56cae83078b3ffb2c852a3',
	measurementId: 'G-S0YTN8YC9C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
