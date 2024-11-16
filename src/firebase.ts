// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Corrected import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjFOT7zyycwtv_YmpPV2tOlRRuJobYaxY',
  authDomain: 'project-logistic-chatbot.firebaseapp.com',
  projectId: 'project-logistic-chatbot',
  storageBucket: 'project-logistic-chatbot.firebasestorage.app',
  messagingSenderId: '310101832050',
  appId: '1:310101832050:web:7345cafe1f49794adeadeb',
  measurementId: 'G-B6E6N1FQD6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Auth instance
export const auth = getAuth(app); // Pass the `app` instance to getAuth

export default app;
