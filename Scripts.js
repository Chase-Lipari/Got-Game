function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("User registered successfully:", userCredential.user);
    })
    .catch((error) => {
        console.error("Error registering user:", error.message);
    });
}

function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("User logged in successfully:", userCredential.user);
    })
    .catch((error) => {
        console.error("Error logging in:", error.message);
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