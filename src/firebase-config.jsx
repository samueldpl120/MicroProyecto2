import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACqFLoVrWivEUjIKeEaWB9YXGmHTbcodc",
    authDomain: "microproyecto2-35fb5.firebaseapp.com",
    projectId: "microproyecto2-35fb5",
    storageBucket: "microproyecto2-35fb5.appspot.com",
    messagingSenderId: "247177214292",
    appId: "1:247177214292:web:a87be42cc80da4b28b70c1",
    measurementId: "G-MPCNZMH7JH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };