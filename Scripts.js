// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLvDbZwodJfGmTDVn9N4fRI3WdNg-ua6U",
  authDomain: "got-game-2.firebaseapp.com",
  projectId: "got-game-2",
  storageBucket: "got-game-2.appspot.com",
  messagingSenderId: "21016679178",
  appId: "1:21016679178:web:3c4d109f0b6314cfd3e0f3",
  measurementId: "G-QJ5YWYS2LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function signup() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        // Update UI or redirect to login page
        console.log("Account created for:", user.email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // Redirect to home page or show user info
        console.log("Logged in as:", user.email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  

function addGame(gameData) {
    const db = firebase.firestore();
    db.collection("games").add(gameData)
    .then((docRef) => {
        console.log("Game added with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding game:", error);
    });
}
