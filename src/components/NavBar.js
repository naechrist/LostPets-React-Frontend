import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pet_types" style={{ textDecoration: "none" }}>
            Type of Pets
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default NavBar;
