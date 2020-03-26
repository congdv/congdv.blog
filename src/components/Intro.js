import React,{useEffect, useState, Fragment } from 'react';
import "./styles.scss";
import avatar from "../images/avatar.jpg";
import anime from "animejs";

const Intro = () => {
  const [animating, setAnimating] = useState(true);
  const fadeIn = () => {
    anime({
      targets: ".wrap",
      translateY: [-100, 500],
      duration: 1000,
      delay: 100,
      easing: 'easeInOutSine',
      complete: () => setAnimating(false),
    });
    console.log("anime");
  }
  useEffect(() => {
    fadeIn();
  }, []);
  const renderPart = () => {
    return <div className="hell"><Fragment>
    <div className="profile-card">
    <div className="avatar">
      <a href="/"><img src={avatar} alt="Cong Dao"/></a>
      
    </div>
    <div className="name">Cong Dao</div>
    <div className="description">Open source lover</div>
    <div className="menu">
      <ul className="menu-container">
        <li><a href="#about-me">About me</a></li>
        <li><a href="#word">words</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
    </div>
    </Fragment></div>
  }
  return (
    <div className="wrap">
        <div className="profile-card">
        <div className="avatar">
          <a href="/"><img src={avatar} alt="Cong Dao"/></a>
        </div>
        <div className="name">Cong Dao</div>
        <div className="description">Open source lover</div>
        <div className="menu">
          <ul className="menu-container">
            <li><a href="#about-me">About me</a></li>
            <li><a href="#word">words</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        </div>
      
    </div>
   
  )
}

export default Intro;