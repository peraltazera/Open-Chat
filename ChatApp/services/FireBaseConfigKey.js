// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDhGnDyMevGRskiAiDX2KUgfn6DzeA8-2Y",
//   authDomain: "chat-8f92f.firebaseapp.com",
//   projectId: "chat-8f92f",
//   storageBucket: "chat-8f92f.appspot.com",
//   messagingSenderId: "495021165621",
//   appId: "1:495021165621:web:52f284c64821709dc9b57c"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// export {auth, provider, db}

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhGnDyMevGRskiAiDX2KUgfn6DzeA8-2Y",
  authDomain: "chat-8f92f.firebaseapp.com",
  projectId: "chat-8f92f",
  storageBucket: "chat-8f92f.appspot.com",
  messagingSenderId: "495021165621",
  appId: "1:495021165621:web:52f284c64821709dc9b57c"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db}
