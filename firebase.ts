import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPicbPgrWhC5EaTjzzpOWy9fo08XKV_1w",
  authDomain: "chatgpt-be5bd.firebaseapp.com",
  projectId: "chatgpt-be5bd",
  storageBucket: "chatgpt-be5bd.appspot.com",
  messagingSenderId: "429918102268",
  appId: "1:429918102268:web:9b755f6cdf6f999ca5ed79",
  measurementId: "G-FVEJD3DGC5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app) 

export {db};