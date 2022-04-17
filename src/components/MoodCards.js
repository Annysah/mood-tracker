import React from "react";

import moodOne from "../assets/one.png";
import whiteCard from "../assets/cat4.png";

const MoodCards = () => {
  return (
    <>
      <div className="card">
        <div className="card__emoji__wrapper">
          <img src={moodOne} alt="An emoji showing an angry mood" />
        </div>
        <div className="card__texts">
            <h2>Cat wasn't having it</h2>
            <p>06-09-2021 / 07:01</p>
        </div>
        <div className="card__image">
          <img src={whiteCard} alt="A white cat head" />
        </div>
      </div>
    </>
  );
};

export default MoodCards;
