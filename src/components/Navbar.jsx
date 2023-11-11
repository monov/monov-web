
import "./Navbar.css";

const Navbar = ({setActive, active}) => {
  
  const handleClick = (act) => {
      setActive(act)
      console.log(active)
  }

  return (
    <div className="navbar">
      <div className="navbar-buttons-wrapper">
        <div onClick={() => {handleClick('port')}} className="navbar-button">Portfolio</div>
        <div onClick={() => {handleClick('home')}} className="navbar-button">Home</div>
        <div onClick={() => {handleClick('blog')}} className="navbar-button">Blog</div>
      </div>
    </div>
  );
};

export default Navbar;
