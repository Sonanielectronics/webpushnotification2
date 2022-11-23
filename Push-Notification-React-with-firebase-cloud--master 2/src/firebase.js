import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-Ip0cLNWHsegMdxPaKJuGIJOyml4NFQw",
  authDomain: "push-app-993a8.firebaseapp.com",
  projectId: "push-app-993a8",
  storageBucket: "push-app-993a8.appspot.com",
  messagingSenderId: "989088972506",
  appId: "1:989088972506:web:bb6ea7d559067e123f6fe3",
  measurementId: "G-9M36QMJZ0W"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;