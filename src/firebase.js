import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCyeDh5qvygRYfsqnmXgs3aV49XM5e6gVQ",
    authDomain: "twitter-clone-2cfb5.firebaseapp.com",
    databaseURL: "https://twitter-clone-2cfb5.firebaseio.com",
    projectId: "twitter-clone-2cfb5",
    storageBucket: "twitter-clone-2cfb5.appspot.com",
    messagingSenderId: "617112312585",
    appId: "1:617112312585:web:f7af1d2b164b78740891d8",
    measurementId: "G-1CBQD3NJYQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db