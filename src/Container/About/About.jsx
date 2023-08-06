import React from "react";
import "./about.css";
import vr from "../../Assets/code.png";
import { Navbar } from "../../Components";
const About = () => {
  return (
    <div>
    <div className="gpt3__possibility section__padding" id="about">      
      <div className="gpt3__possibility-image">
        <img src={vr} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">Your Ultimate Coding Odyssey</h1>
        <p>
          Welcome to CodeItAll, the ultimate destination for aspiring developers
          and coding enthusiasts! Embark on a thrilling journey through our
          treasure trove of important coding questions and comprehensive
          courses, carefully curated to equip you with the skills to conquer any
          coding challenge.
          <p> Explore our collection of hand-picked coding
          questions that will sharpen your problem-solving prowess and challenge
          your intellect. Test your mettle, earn points, and compete against
          other members in our friendly coding battles.</p>
        </p>
        <h4>Let's Code and Crack !!</h4>
      </div>
    </div>
    </div>
  );
};

export default About;
