//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDW_kbuHAizGtxfZqqF_oIjdV79xO88gZw",
    authDomain: "comp1800-202410-demo-d0b04.firebaseapp.com",
    projectId: "comp1800-202410-demo-d0b04",
    storageBucket: "comp1800-202410-demo-d0b04.appspot.com",
    messagingSenderId: "893431895733",
    appId: "1:893431895733:web:b26730496f2a2b99e610fc"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
