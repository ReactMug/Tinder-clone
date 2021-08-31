import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyATCSvPzmaA4ePdFZOuqzhzK6p4iwAkjX4",
  authDomain: "tinder-clone-f0dc8.firebaseapp.com",
  projectId: "tinder-clone-f0dc8",
  storageBucket: "tinder-clone-f0dc8.appspot.com",
  messagingSenderId: "458607531318",
  appId: "1:458607531318:web:2abf0dccb4b58b39224f97",
  measurementId: "G-85L56TF7L0"
  };
  const firebaseApp =initializeApp(firebaseConfig)
  const dataBase = getFirestore(firebaseApp);

  export default dataBase