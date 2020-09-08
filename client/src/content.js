import React from "react";
import Img1 from "./me.jpg";

const Content = (props) => {
  return (
    <div>
      <div className="contentWrapper">
        <h1>Here are some of my lastest projects</h1>
        <h2>project1</h2>
        <img src={Img1}></img>
        <h2>project2</h2>
        <img src={Img1}></img>
        <h2>project3</h2>
        <img src={Img1}></img>
        <h2>project4</h2>
        <img src={Img1}></img>
      </div>
    </div>
  );
};

export default Content;
