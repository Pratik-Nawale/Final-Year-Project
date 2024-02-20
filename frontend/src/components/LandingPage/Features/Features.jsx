import "./Feature.css";
import React from "react";

const FeatureElement1 = (item) => {
  return (
    <div id="features-main-container">
      <div id="features-content-container">
        <h1>{item.item.heading}</h1>
        <p>
        {item.item.info}
        </p>
      </div>
      <div id="features-image-container">
        <img src={item.item.image} alt="" />
      </div>
    </div>
  );
};
const FeatureElement2 = (item) => {
  return (
    <div id="features-main-container">
      <div id="features-image-container">
        <img src={item.item.image} alt="" />
      </div>
      <div id="features-content-container">
        <h1>{item.item.heading}</h1>
        <p>
          {item.item.info}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const Feature_contents = [
    {
      heading: "Win Prediction",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor natus earum, laboriosam nemo nisi hic magni reiciendis assumenda. Ipsa minus cumque pariatur vel omnis unde. Quam eaque quis cumque illo!",
      image: "./images/Features/Prediction.png"
      
    },
    {
      heading: "Win Prediction",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor natus earum, laboriosam nemo nisi hic magni reiciendis assumenda. Ipsa minus cumque pariatur vel omnis unde. Quam eaque quis cumque illo!",
      image: "./images/Features/Prediction.png"
      
    },
    {
      heading: "Win Prediction",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor natus earum, laboriosam nemo nisi hic magni reiciendis assumenda. Ipsa minus cumque pariatur vel omnis unde. Quam eaque quis cumque illo!",
      image: "./images/Features/Prediction.png"
      
    },
  ];

  return (
    <div>
      <FeatureElement1 item={Feature_contents[0]}/>
      <FeatureElement2 item={Feature_contents[1]}/>
      <FeatureElement1 item={Feature_contents[2]}/>
    </div>
  );
};

export default Features;
