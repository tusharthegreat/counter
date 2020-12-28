import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
const Navbar=()=>{
    return(
        <>
        <div className="navdiv">
            <NavLink activeClassName="menu_active" exact className="nav_link" to="/">Synch 4-bit</NavLink>
            <NavLink activeClassName="menu_active" exact className="nav_link" to="/synchtwo">Synch 2-bit</NavLink>
        </div>
        </>
    );
};
export default Navbar;