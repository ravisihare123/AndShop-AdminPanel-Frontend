import React, { useState, useEffect, useMemo } from "react";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [adminInfo, setAdminInfo] = useState({
    AdminName: null,
    aid: null,
  });

  // Init Loading
  useEffect(() => {
      function fetchData() {
        var adminData = JSON.parse(localStorage.getItem('Aid'))
        if (adminData) {
            setAdminInfo({
              AdminName: adminData.name,
              aid: adminData.id,
            });
        }
      
        // alert(adminData.name)
        // alert(JSON.stringify(adminInfo))
   
    }
    fetchData();
  }, []);

  const values = useMemo(
    () => ({
          adminInfo,
        setAdminInfo
    }),
    [ adminInfo]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth hook must be used with a AuthProvider component");
  }

  return context;
}
