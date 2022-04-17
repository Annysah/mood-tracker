import React from "react";
import cat from "../assets/cat1.png";
import moodOne from "../assets/one.png";
import moodTwo from "../assets/two.png";
import moodThree from "../assets/three.png";

const LeftSide = () => {
  return (
    <>
      <div className="leftside">
        <div className="leftside__image">
          <img src={cat} alt="A cat head" />
        </div>

        <div>
          <h2>What is your cat's current mood?</h2>
        </div>

        <div className="leftside__emoji">
          <div className="leftside__emoji__wrapper">
            <img src={moodOne} alt="An emoji showing an angry mood" />
          </div>

          <div className="leftside__emoji__wrapper">
            <img src={moodTwo} alt="An emoji showing a neutral mood" />
          </div>

          <div className="leftside__emoji__wrapper">
            <img src={moodThree} alt="An emoji showing a smiling mood" />
          </div>
        </div>
        
        <button className="leftside__button">Save mood</button>
      </div>
    </>
  );
};

export default LeftSide;
