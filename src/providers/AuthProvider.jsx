import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;