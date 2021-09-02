import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = createContext({ status: null });
export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [authStatus, setAuthStatus] = useState();

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("status"));
    if (status) {
      setAuthStatus(status);
    } else {
      history.push("/");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status: { authStatus, setAuthStatus },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
