import React from "react";
// import bannerImg from "./ny.jpg";

const Banner = (props) => {
  return (
    <div>
      <div className="banner">
        <div className="contain">
          <h1>Welcome to my portfolio website</h1>
          <p>
            Computer Science student at Queensborough Community College with a
            passion for tech and a desire to learn. Currently in a joint program
            with John Jay College of Criminal Justice - Majoring in Computer
            Science and Information Security. Seeking to gain a position with a
            growing and innovative company.
          </p>
        </div>
        {/* <img className="banner" src={bannerImg}></img> */}
      </div>
    </div>
  );
};

export default Banner;
