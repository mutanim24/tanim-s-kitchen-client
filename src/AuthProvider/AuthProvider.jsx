import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    
    // State to manage loading and error (optional but useful)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const googleLogin = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // You can handle the result here if needed
            return result;
        } catch (error) {
            setError(error);
            console.error('Google login error:', error);
            throw error; // Re-throw the error if you want to handle it later
        } finally {
            setLoading(false);
        }
    };

    const authInfo = {
        googleLogin,
        loading,
        error
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
