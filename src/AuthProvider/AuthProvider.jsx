import { useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const isLoggedIn = () =>{
    const loggedin = localStorage.getItem("login-access-token")
    if(loggedin){
      setUser(true)
    }
    if (!user) {
      return <Navigate to={"/login"}></Navigate>;
    }
  }



  const authInfo = {
    user,
    setUser,
    isLoggedIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
