import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [spinner , setSpinner] = useState(true)
    const createUser = (email, password) => {
        setSpinner(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setSpinner(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setSpinner(true);
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, loggedUser=>{
            console.log("observer", loggedUser)
            // setUser(loggedUser)
            setUser(loggedUser)
            setSpinner(false);
        })
        return ()=>{
            unsubscribe();
        }
        
    },[])



    const authInfo = {
        user,
        spinner,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;