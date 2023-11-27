import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import useAxiosPublic from '../hook/useAxiosPublic';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState(null)
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider();
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser)
            const userInfo = {
                email: setUser?.email
            }
            if (curentUser) {
                // assign get token store client
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                            setloading(false)
                        }
                    })
            } else {
                //TODO: remove token (if token stored in the client side: local storage, chaching, in memory)
                localStorage.removeItem("access-token")
                setloading(false)
            }
            setloading(false)
        })

        return () => {
            unSubcribe();
        }
    }, [])

    const userInfo = {
        loading, user, signUp, logIn, signInWithGoogle, logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;