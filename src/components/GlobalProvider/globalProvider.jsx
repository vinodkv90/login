import { createContext, useState } from 'react'

export const AuthContext = createContext(null);

const GlobalProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    console.log(auth)
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
    )
}

export default GlobalProvider