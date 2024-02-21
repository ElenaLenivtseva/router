import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenuAfterClick =()=> {
        if (menuOpen) {
            setMenuOpen(!menuOpen)
        }
    }
  return (
    <nav>
      <Link to="/" className="title" onClick={closeMenuAfterClick}>
        Website
      </Link>
      <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li onClick={closeMenuAfterClick}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={closeMenuAfterClick}>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li onClick={closeMenuAfterClick}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
