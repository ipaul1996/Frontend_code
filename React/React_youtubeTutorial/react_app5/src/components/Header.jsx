import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <Link style={{color: "white"}} to={"/"}><h1>Home</h1></Link>
      <Link style={{color: "white"}} to={"/about"}><h1>About</h1></Link>
      <Link style={{color: "white"}} to={"/contact"}><h1>Contact</h1></Link>
    </div>
  )
}


export default Header;