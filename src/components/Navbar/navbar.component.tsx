import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper } from "./NavBar.styles";

const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/" className="nav-link">ExcerTracker</Link>
      {/* <div> */}
            <Link to="/" className="nav-link">
              Exercises
            </Link>
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            <Link to="/user" className="nav-link">Create User</Link>
      {/* </div> */}
    </NavWrapper>
  );
};

export default Navbar;
