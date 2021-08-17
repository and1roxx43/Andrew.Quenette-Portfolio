import React from "react";
import Heading from "../PageHeader";
import ResumeMe from "../../pdf/Andrew Quenette _CV_2021-22.pdf"


export default function Resume() {
    return (
        <div className="resume-container">

            <Heading heading={"Resume"} />
            
            <div className="resume-download">
                <h3>Download my <span className="resume-link"><a href={ResumeMe} target="_blank">resume</a></span></h3>
            </div>

            <div className="resume-front-end">
                <h4>Front-end Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>

            <div className="resume-back-end">
                <h4>Back-end Proficiencies</h4>
                <ul>
                    <li>APIs</li>
                    <li>Node Js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>GraphQL</li>
                    <li>Apollo</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </div>
            
           
        </div>
    )
}