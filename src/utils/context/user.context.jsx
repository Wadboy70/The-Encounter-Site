import React, { createContext, useState } from 'react';

export const FirebaseUserContext = createContext(null);


export const FirebaseUserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <FirebaseUserContext.Provider value = {[user, setUser]}>
            {children}
        </FirebaseUserContext.Provider>
    );
};