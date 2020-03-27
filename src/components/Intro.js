import React,{ useState } from 'react';
import "./styles.scss";
import avatar from "../images/avatar.jpg";
import anime from "animejs";

import AboutMeCard from "./Card/AboutMeCard";
import ProjectCard from "./Card/ProjectCard";

const Intro = () => {
  const [aboutCard, setAboutCard] = useState(false);
  const [projectCard, setProjectCard] = useState(false);
  const [isFadingOut,setIsFadingOut] = useState(true);
  const [isFadingIn, setIsFadingIn] = useState(false);

  const fade = (orientation, onComplete, onBegin) => {
    anime({
      targets: ".card",
      translateX: orientation, // [0,-340]
      duration: 1000,
      delay: 100,
      easing: 'easeInOutSine',
      begin: onBegin,
      complete: onComplete,
    });
  }

  const handleClick = (value) => {
     const isFade = (value==="first" && aboutCard) || (value === "second" && projectCard)
    

    if(isFadingOut) {
      fade([0,-340], () => { setIsFadingOut(false); setIsFadingIn(true)})
    }
    if(isFadingIn && isFade) {
      fade(
        [-340,0],
        () => { setIsFadingOut(true); setIsFadingIn(false); },
        () => {setAboutCard(false);setProjectCard(false)}
      );
    }

    setAboutCard(value==="first");
    setProjectCard(value==="second");
    
  }
  
  return (
    <div className="wrap">
      <div className="card">
        <div className="profile-card">
        <div className="avatar">
          <a href="/"><img src={avatar} alt="Cong Dao"/></a>
        </div>
        <div className="name">Cong Dao</div>
        <div className="description">Open source lover</div>
        <div className="menu">
          <ul className="menu-container">
            <li><a onClick={() => handleClick("first")}>About me</a></li>
            <li className="not-implemented"><a>words</a></li>
            <li><a onClick={() => handleClick("second")}>Projects</a></li>
          </ul>
        </div>
        </div>
      </div>
      {
        aboutCard &&<AboutMeCard/>
      }

      {
        projectCard && <ProjectCard/>
      }
      
    </div>
   
  )
}

export default Intro;