// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";
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
const auth = getAuth(app)
connectAuthEmulator(auth, "http://127.0.0.1:5500/Login.html")
const loginForm = document.getElementById('loginForm');

const login = async () => {
  const email = loginForm['userEmail'].value;
  const password = loginForm['userPass'].value;

  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log(userCredential.user);
}

// Login

loginForm.addEventListener('click', login);

// Logout
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', (e) => {
  auth.signOut().then(() => {
    console.log('User signed out');
    // Update UI or redirect
  });
});

// Auth state changes
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in, show logout button
    logoutBtn.style.display = 'block';
  } else {
    // User is signed out, hide logout button
    logoutBtn.style.display = 'none';
  }
});
  

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
