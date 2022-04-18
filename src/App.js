import React, { useState } from "react";
import data from "./components/Data";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./scss/index.scss";

const App = () => {
  const {moodItems} = data

  let quantity;
  const [cardItems, setCardItems] = useState([]);

  const handleAddMood = () => {
    //let updatedCardItem = [...cardItems]

  }

  const onAddMood = (mood) => {
    const findMood = cardItems.find((item) => item.mood.id === mood.id);

    if (findMood) {
      const newMood = cardItems.map((item) => {
        if (item.mood.id === mood.id) {
          return {
            mood: findMood.mood,
            quantity: quantity + 1,
          };
        }
        return item;
      });
      setCardItems(newMood);
    } else {
      const newItem = {
        mood: mood,
        quantity: 1,
      };
      setCardItems([...cardItems, newItem]);
    }
  };

  return (
    <>
      <div className="app">
        <LeftSide onAddMood={onAddMood} handleAddMood={handleAddMood} moodItems={moodItems} />
        <RightSide cardItems={cardItems} onAddMood={onAddMood} />
      </div>
    </>
  );
};

export default App;
