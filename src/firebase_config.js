import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDAgPP5C840sh2-_nBclH9tnQWB2esGOXM",
  authDomain: "todo-app-a8ddf.firebaseapp.com",
  projectId: "todo-app-a8ddf",
  storageBucket: "todo-app-a8ddf.appspot.com",
  messagingSenderId: "833862105802",
  appId: "1:833862105802:web:6ff5797a3448dedd4e9233"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  export {db};
  