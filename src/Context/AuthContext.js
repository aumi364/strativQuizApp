import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = createContext({ status: null });
export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [authStatus, setAuthStatus] = useState({
    isAuthenticated: false,
    isAdmin: false,
  });
  const [statusToggler, setStatusToggler] = useState(false);
  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("status"));
    if (status) {
      setAuthStatus(status);
    } else {
      history.push("/");
    }
  }, []);
  useEffect(() => {
    if (statusToggler) {
      localStorage.setItem("status", JSON.stringify(authStatus));
    }
  }, [statusToggler]);
  return (
    <AuthContext.Provider
      value={{ status: setAuthStatus, toggler: setStatusToggler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
