// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {auth, googleProvider} from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  //create state to hold values of input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   //get user already signed in
  //   console.log(auth?.currentUser?.photoURL);

  //sign in function
  //create a new user account using the provided email and password
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  //sign in function with Google
  //create a new user with Google account
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  //sign out function
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password.."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In </button>
      <button onClick={signInWithGoogle}>Sign In With Google </button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Auth;
