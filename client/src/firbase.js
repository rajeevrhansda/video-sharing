import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYaN4UT4ivr6ukNi3TFXm_vlmuz2U4orI",
    authDomain: "video-3c2a8.firebaseapp.com",
    projectId: "video-3c2a8",
    storageBucket: "video-3c2a8.appspot.com",
    messagingSenderId: "958155874041",
    appId: "1:958155874041:web:d78d38a7e72f27302bcc28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;