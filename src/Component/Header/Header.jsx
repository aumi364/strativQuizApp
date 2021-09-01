import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <NavLink to="/questions" className="cnav-link">
        questions
      </NavLink>
      <NavLink to="/answers" className="cnav-link">
        answers
      </NavLink>

      <NavLink to="/" className="cnav-link">
        logout
      </NavLink>
    </div>
  );
};

export default Header;
