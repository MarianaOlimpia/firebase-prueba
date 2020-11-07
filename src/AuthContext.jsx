import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)
    const loginAuth = (email, password) => auth.signInWithEmailAndPassword(email, password)
    const logout = () => auth.signOut()
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        loginAuth,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}