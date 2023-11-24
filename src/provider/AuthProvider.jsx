import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, cureentUser => {
            setUser(cureentUser)
            setloading(false)
        })

        return () => {
            unSubcribe();
        }
    }, [])

    const userInfo = {
        loading, user, signUp, logIn, signInWithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;