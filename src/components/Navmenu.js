import React from "react";
import { NavLink } from "react-router-dom";
import Author from "./Author";


export default function NavMenu () {
    return (
        <div className="nav-menu">
            <div className="author-title">
                <Author />
            </div>
            
            <div >
           
                <ul className="navbar-item">
                    
                    <li>
                        <NavLink exact={true} activeClassName="is-active" to="/">About me</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="is-active" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="is-active" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} activeClassName="is-active" to="/resume">Resume</NavLink>
                    </li>
                </ul>

            </div>
        </div>
        
     
    )
}

