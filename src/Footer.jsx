import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
const Footer=()=>{
    return(
        <>
        <footer className="foobar">
            Copyright©Tushar Jain  |
            <NavLink exact className="nav_link" to="/synchtwo">Github Source</NavLink>
        </footer>
        </>
    );
};
export default Footer;