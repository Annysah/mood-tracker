import React from "react";

import moodOne from "../assets/one.png";
import whiteCat from "../assets/cat4.png";

const MoodCards = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="card__emoji__wrapper" key={item.id}>
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="card__texts">
          <h2>{item.description}</h2>
          <p>06-09-2021 / 07:01</p>
        </div>
        <div className="card__image">
          <img src={item.whiteCat} alt="A white cat head" />
        </div>
      </div>
    </>
  );
};

export default MoodCards;
