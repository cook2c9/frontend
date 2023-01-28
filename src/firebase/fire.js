// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnTdX2hsNfr2BHR12we9omOeGxr5xymag",
  authDomain: "bellascustomcrafts-d9bc5.firebaseapp.com",
  projectId: "bellascustomcrafts-d9bc5",
  storageBucket: "bellascustomcrafts-d9bc5.appspot.com",
  messagingSenderId: "988274383131",
  appId: "1:988274383131:web:20bd9932252af7170b5bbe",
  measurementId: "G-0ENKY5L1WW"
};

export const CreateNewUser = async (email, password) =>{
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Resistered as: " + user.email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error: " + errorCode + " | " + errorMessage)
  });
};

export const LoginUser = async (email, password) =>{
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    alert("Signed in as: " + user.email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("An Error Occured: " + errorCode + " " + errorMessage)
  });
}

export const LogOutUser = async () =>{
  await signOut(auth)
  alert("Signed out")
}

export const useAuth = () =>{
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const email = user.email;
      console.log("CALL FROM AUTH - Signed in as: " + email)
    } else {
      console.log("User is signed out")
    }
  });
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);