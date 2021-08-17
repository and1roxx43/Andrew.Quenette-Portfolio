import React from "react";
import portfolios from "../data/portfolios";
import { FaGithub, FaGlobe } from "react-icons/fa";

  function Menu() {
      return (
          <div className="grid-content">
            {
                portfolios.map((item) => {
                    return <div className="grid-item" key={item.id}>
                    
                    <div className="portfolio-content">
                        <div className="portfolio-image">
                            <img src={item.image} alt={item.title}/>
                            <ul>
                                <li>
                                    <a href={item.link1} target="_blank">
                                        < FaGithub className="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href={item.link2} target="_blank">
                                        <FaGlobe className="icon" />
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>
                    </div>
                })
            }

          </div>
      )
  }

  export default Menu;