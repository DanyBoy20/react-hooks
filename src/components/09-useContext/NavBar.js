import { NavLink, Outlet } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">useContext</NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink style={({isActive}) => isActive ? {color: "white", fontWeight: "bolder",textTransform: "uppercase"} : {}} className="nav-NavLink link-items" to="/">Home</NavLink>
              <NavLink style={({isActive}) => isActive ? {color: "white", fontWeight: "bolder",textTransform: "uppercase"} : {}} className="nav-NavLink link-items" to="/about">About</NavLink>
              <NavLink style={({isActive}) => isActive ? {color: "white", fontWeight: "bolder",textTransform: "uppercase"} : {}} className="nav-NavLink link-items" to="/login">Login</NavLink>
            </div>
          </div>
      </nav>
      <Outlet />
    </>
    
  );
};

export default NavBar;
