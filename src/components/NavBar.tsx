import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { base } from "../utility.tsx";

const NavBar = () => {
  const menuObj = {
    home: `${base}`,
    symposium: `${base}symposium`,
    about: `${base}about`,
  };
  const listMenu = () => {
    return Object.entries(menuObj).map(([key, value], idx) => (
      <NavLink className="NavBar-link" key={idx} to={value} end>
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </NavLink>
    ));
  };
  return (
    <div>
      <nav className="NavBar-container">{listMenu()}</nav>
    </div>
  );
};

export default NavBar;
