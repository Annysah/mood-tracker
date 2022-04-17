import React from "react";

import smallCat from "../assets/cat2.png";
import transparentCat from "../assets/cat3.png";
import MoodCards from "./MoodCards";

const RightSide = () => {
  return (
    <>
      <div className="rightside">
        <div className="rightside__heading">
          <img src={smallCat} alt="A cat small head" />
          <h2>
            Cat mood tracker <sup className="rightside__heading__sup">TM</sup>
          </h2>
        </div>

        <p className="rightside__firstpara">Mood History</p>

        <div className="rightside__content">
          <img className="rightside__content__image" src={transparentCat} alt="A cat transparent head" />
          <p>No mood history to show yet</p>
        </div>

        <MoodCards />
      </div>
    </>
  );
};

export default RightSide;
