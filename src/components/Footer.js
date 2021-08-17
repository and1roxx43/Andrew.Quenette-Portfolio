import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <div className="social-icon">
            
            <a href="https://wwww.facebook.com" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook} size="2x" /></a>
        
            <a href="https://linkedIn.com" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" /></a>
        
            <a href="https://github.com" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></a>
            
        </div>

    )
}