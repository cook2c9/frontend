// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
    user.photoURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
    window.localStorage.setItem("CURRENT_USER", JSON.stringify(user.uid))
    window.localStorage.setItem("CURRENT_USER_EMAIL", JSON.stringify(user.email))
    window.localStorage.setItem("CURRENT_USER_PROFILE_PHOTO", JSON.stringify(user.photoURL))
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
    window.localStorage.setItem("CURRENT_USER", JSON.stringify(user.uid))
    window.localStorage.setItem("CURRENT_USER_EMAIL", JSON.stringify(user.email))
    window.localStorage.setItem("CURRENT_USER_PROFILE_PHOTO", JSON.stringify(user.photoURL))
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("An Error Occured: " + errorCode + " " + errorMessage)
  });
}

export const LogOutUser = async () =>{
  await signOut(auth)
  window.localStorage.removeItem("CURRENT_USER")
  window.localStorage.removeItem("CURRENT_USER_EMAIL")
  window.localStorage.removeItem("CURRENT_USER_PROFILE_PHOTO")
  alert("Signed out")
}

export const useAuth = () =>{
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.localStorage.setItem("CURRENT_USER", JSON.stringify(user.uid))
      window.localStorage.setItem("CURRENT_USER_EMAIL", JSON.stringify(user.email))
      window.localStorage.setItem("CURRENT_USER_PHOTO", JSON.stringify(user.photoURL))
      console.log("CALL FROM AUTH - Signed in as: " + user.email)
    } else {
      window.localStorage.removeItem("CURRENT_USER")
      window.localStorage.removeItem("CURRENT_USER_EMAIL")
      window.localStorage.removeItem("CURRENT_USER_PROFILE_PHOTO")
      console.log("User is signed out")
    }
  });
}

export const UploadPhoto = async (file, currentUser, setLoading) =>{
  //Create a location that the file will exist in
  const fileRef = ref(storage, currentUser + '.png')

  //Loading... Uploading new location
  setLoading(true)
  await uploadBytes(fileRef, file);
  
  //Get the new photo to update on the user's profile
  const profilePhotoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, JSON.stringify({photoURL: profilePhotoURL}))
  
  //Completed
  console.log(currentUser.photoURL)
  setLoading(false)
  alert("File uploaded")
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app);