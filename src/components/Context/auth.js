import react, { useState,useEffect, useContext, useMemo, useCallback, createContext } from "react";

export const AuthContext = createContext(null);

export default function useAuth() {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth hook must be used with a AuthProvider component")
    }
    return context;
}

export const AuthProvier = ({ children }) => {
    const [adminInfo, setAdminInfo] = useState({
        adminName: null,
        adminId:null

    })

     useEffect(() => {
      
        function fetchData() {
        var adminData = localStorage.getItem('Aid')
            setAdminInfo(
                {
                    adminName:adminData.name,
                    adminId:adminData.id
                }
            )
    }
   fetchData()
     }, [])
    
    const values = useMemo(
        () => ({
            adminInfo,
            setAdminInfo
        })
    )
    
    return (
        <AuthContext.Provider key={values}>{ children}</AuthContext.Provider>
    )
}