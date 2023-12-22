import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBtVaKMDSmj-u-h0WUxsVMgR1CaORgorNw",
    authDomain: "dropbox-clone-7aca0.firebaseapp.com",
    projectId: "dropbox-clone-7aca0",
    storageBucket: "dropbox-clone-7aca0.appspot.com",
    messagingSenderId: "960774709359",
    appId: "1:960774709359:web:89f93a9aa020604ed6ad9a"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };