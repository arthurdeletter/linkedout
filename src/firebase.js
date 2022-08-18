import {
    initializeApp
} from 'firebase/app';
import {
    getFirestore
} from 'firebase/firestore';
import {
    getAuth
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAq6R1znv_28-EZ90tGStdoYNsxJBQym0U",
    authDomain: "linkedout-58bd5.firebaseapp.com",
    projectId: "linkedout-58bd5",
    storageBucket: "linkedout-58bd5.appspot.com",
    messagingSenderId: "666376763944",
    appId: "1:666376763944:web:cd60219f805afc42c2531d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {
    db,
    auth
};