import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null);

const GlobalProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get('/api/home/me', {
                    withCredentials: true
                });

                setAuth({
                    isAuthenticated: true,
                    user: res.data.user
                });
            } catch {
                setAuth({
                    isAuthenticated: false,
                    user: null
                });
            }
        };

        checkAuth();
    }, []);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
    )
}

export default GlobalProvider