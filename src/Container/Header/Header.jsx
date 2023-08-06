import React from "react";
import ai from "../../Assets/headimg.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
      Unlock the knowledge that empowers you and unleashes your full potential !
      </h1>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
