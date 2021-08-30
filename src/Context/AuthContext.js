import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  isAdmin: false,
});
export const AuthProvider = ({ children }) => {
  useEffect(() => {}, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
export default AuthContext;
