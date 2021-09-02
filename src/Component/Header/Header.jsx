import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import AuthContext from "Context/AuthContext";
const Header = () => {
  const { status } = useContext(AuthContext);
  const history = useHistory();
  const { authStatus, setAuthStatus } = status;
  const logOutHandler = () => {
    setAuthStatus({
      isAuthenticated: false,
      isAdmin: false,
    });
    localStorage.removeItem("status"); // logging out and removed user from local storage
    history.push("/");
  };
  return (
    <div className="header">
      {authStatus && authStatus.isAdmin === true && (
        <Link to="/questions" className="cnav-link">
          Questions
        </Link>
      )}
      <Link to="/answers" className="cnav-link">
        Answers
      </Link>
      <div className="cnav-link">
        <AiOutlinePoweroff
          onClick={logOutHandler}
          className="icon logout-icon"
        />
      </div>
    </div>
  );
};

export default Header;
