import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    const signoutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return unSubscribe;
    })

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        loginWithGoogle,
        signoutUser,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;