import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const GoogleSignInAPI = () => {
  try {
    let GoogleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, GoogleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

export const Logout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};
