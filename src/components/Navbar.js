import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNav(false);
  }, [location]);

  return (
    <div className='navbar' id={expandNav ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={() => setExpandNav(!expandNav)}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
