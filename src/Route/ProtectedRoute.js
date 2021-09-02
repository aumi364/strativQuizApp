import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "Context/AuthContext";
const ProtectedRoute = () => {
  const {
    status: { authStatus },
  } = useContext(AuthContext);

  const [authenticated, setAuthenticated] = useState();
  useEffect(() => {
    setAuthenticated(authStatus);
  }, [authStatus]);
  const PrivateRoute = ({ children, admin, ...rest }) => {
    const renderFunc = () => {
      if (admin) {
        return (
          <Route
            {...rest}
            render={() => {
              return authenticated.isAuthenticated && authenticated.isAdmin ? (
                children
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        );
      } else {
        return (
          <Route
            {...rest}
            render={() => {
              return authenticated.isAuthenticated ? (
                children
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        );
      }
    };

    return <>{authenticated && renderFunc()}</>;
  };

  return { PrivateRoute };
};

export default ProtectedRoute;
