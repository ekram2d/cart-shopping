import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
const AuthoProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const authInfo = {
            user,
            setUser,
            loading,
            
        }
       
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthoProvider;
