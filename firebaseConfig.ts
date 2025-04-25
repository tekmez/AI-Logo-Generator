import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCsEmgG6POgfoMgwmp60vy9nA1R-Argr9Y",
  authDomain: "ai-logo-generator-a664d.firebaseapp.com",
  projectId: "ai-logo-generator-a664d",
  storageBucket: "ai-logo-generator-a664d.firebasestorage.app",
  messagingSenderId: "160136341146",
  appId: "1:160136341146:web:0eafde5185e3858aa56123",
  measurementId: "G-G6HS4YHG97",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

// Yerel geliştirme sırasında emülatör için
// if (__DEV__) {
//   connectFunctionsEmulator(functions, "localhost", 5001);
// }

export { db, functions };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
