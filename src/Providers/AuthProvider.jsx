import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from 'axios';



export const AuthContext = createContext(null);


const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: image
    })

  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      // get set token
      if (currentUser) {
        axios.post('https://lang-link-server-side.vercel.app/jwt', { email: currentUser.email })
          .then(data => {
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
          })
      }
      else {
        localStorage.removeItem('access-token')
      }


    });
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createNewUser,
    signIn,
    googleSignIn,
    updateUserProfile,
    logOut,

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;