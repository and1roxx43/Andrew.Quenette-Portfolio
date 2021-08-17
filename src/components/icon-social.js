import React from "react";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
    return(
        <div className="social-icon">
            
            <a href="https://wwww.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        
            <a href="https://linkedIn.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        
            <a href="https://github.com" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            
        </div>

    )
}