import React from "react";
import avatar from "./portait.jpg";
// import bannerImg from "./ny.jpg";

const Banner = (props) => {
  return (
    <div>
      <div className="banner">
        <div className="contain">
          <img src={avatar} />
          <h1>WELCOME!</h1>
          {/* <p>
            Hi, My name is Mohamed Akeel Khan and i am a Computer Science
            student at Queensborough Community College with a passion for tech
            and a desire to learn. Currently in a joint program with John Jay
            College of Criminal Justice - Majoring in Computer Science and
            Information Security. Seeking to gain a position with a growing and
            innovative company.
          </p> */}
          <a className="cta" href="/">
            <button>Contact</button>
          </a>
        </div>
        {/* <img className="banner" src={bannerImg}></img> */}
      </div>
    </div>
  );
};

export default Banner;
