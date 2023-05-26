import { NavLink } from "react-router-dom";

const Header = props => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white"
    };
  };

  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/"}><h1>Home</h1></NavLink>
      <NavLink style={navLinkStyles} to={"/about"}><h1>About</h1></NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}><h1>Contact</h1></NavLink>
    </div>
  )
}


export default Header;