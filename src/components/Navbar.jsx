import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({setActive, active}) => {
  
  const handleClick = (act) => {
      setActive(act)
      console.log(active)
  }

  return (
    <div className="navbar">
      <div className="navbar-buttons-wrapper">
        <Link to="/portfolio" onClick={() => {handleClick('port')}} className={`navbar-button ${active === 'port' ? 'active' : ''}`}>Portfolio</Link>
        <Link to="/" onClick={() => {handleClick('home')}} className={`navbar-button ${active === 'home' ? 'active' : ''}`}>Home</Link>
        <Link to="blog" onClick={() => {handleClick('blog')}} className={`navbar-button ${active === 'blog' ? 'active' : ''}`}>Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
