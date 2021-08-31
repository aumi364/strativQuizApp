import React, { useState, useEffect, useContext } from "react";
import { Users } from "Pages/Utils/Users";
import AuthContext from "Context/AuthContext";
import { useHistory } from "react-router-dom";
const useSignIn = () => {
  const [errors, setErrors] = useState();
  const { status, toggler } = useContext(AuthContext);
  const history = useHistory();

  const checkAuth = (values) => {
    const { email, password } = values;
    const result = Users.find((user) => {
      return user.email === email;
    });

    if (result) {
      if (result.password === password) {
        status({
          isAuthenticated: true,
          isAdmin: result.isAdmin,
        });
        toggler(true);

        if (result.isAdmin) {
          history.push("/questions");
        } else if (!result.isAdmin) {
          history.push("/answers");
        }
      } else {
        setErrors("Password does not match");
      }
    } else {
      setErrors("No such email exists");
    }
  };
  return { checkAuth, errors };
};

export default useSignIn;
