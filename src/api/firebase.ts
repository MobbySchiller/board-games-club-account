// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import APP_CONFIG from "../config/config"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: APP_CONFIG.API_KEY,
    authDomain: APP_CONFIG.AUTH_DOMAIN,
    projectId: APP_CONFIG.PROJECT_ID,
    storageBucket: APP_CONFIG.STORAGE_BUCKET,
    messagingSenderId: APP_CONFIG.MESSAGING_SENDER_ID,
    appId: APP_CONFIG.APP_ID
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth()
