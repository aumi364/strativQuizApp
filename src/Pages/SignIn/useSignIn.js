import { useState, useContext } from "react";
import { Users } from "Pages/Utils/Users";
import AuthContext from "Context/AuthContext";
import { useHistory } from "react-router-dom";
const useSignIn = () => {
  const [errors, setErrors] = useState();
  const { status } = useContext(AuthContext);
  const { setAuthStatus } = status;
  const history = useHistory();

  const checkAuth = (values) => {
    const { email, password } = values;
    const result = Users.find((user) => {
      return user.email === email;
    });

    if (result) {
      if (result.password === password) {
        const newAuthStatus = {
          isAuthenticated: true,
          isAdmin: result.isAdmin,
        };
        setAuthStatus(newAuthStatus);
        localStorage.setItem("status", JSON.stringify(newAuthStatus));

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
