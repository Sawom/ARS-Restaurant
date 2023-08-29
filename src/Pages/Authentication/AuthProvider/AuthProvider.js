import React, { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';

export const AuthContext = createContext(null); // may be change
const AuthProvider = ({ children }) => {
     const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;