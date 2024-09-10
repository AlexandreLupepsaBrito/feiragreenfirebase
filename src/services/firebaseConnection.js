
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAX6aT7hxgZRNns_9ij_FInEFe32pbDcFo",
  authDomain: "feira-green-of.firebaseapp.com",
  projectId: "feira-green-of",
  storageBucket: "feira-green-of.appspot.com",
  messagingSenderId: "856303680581",
  appId: "1:856303680581:web:9c17afa627d5861185b72c"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };