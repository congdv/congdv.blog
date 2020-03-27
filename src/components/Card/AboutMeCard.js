import React from "react";
import { FadeInDiv } from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub,faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons"

const AboutMeCard = () => {
  return (
  <FadeInDiv>
    <div className="card-2">
      <div className="about-me-card">
        <div className="description">
          <p>I'm Cong, and I'm from Vietnam. I have passion with Open Source Software and Software Development.</p>
          <p>
          I started this website after I graduated from my university in Vietnam. I was inspired of many developers, and I enjoy technical blog on the internet. 
          So, I want to try writing some things. Also, I like to use this site to share What I learned, or What I can easy to forget.
        </p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/congdv" target="_blank"><FontAwesomeIcon icon={faGithub}/> @congdv</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/congdv" target="_blank"><FontAwesomeIcon icon={faLinkedin}/> @congdv</a> 
          </li>
          <li>
             <a href="mailto: congdaovan94@gmail.com" target="_blank"><FontAwesomeIcon icon={faGoogle}/> congdaovan94@gmail.com</a> 
          </li>
        </ul>
        </div>
      </div>
    </div>
  </FadeInDiv>)
}

export default AboutMeCard;