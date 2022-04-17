import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./scss/index.scss";

const App = () => {
  return (
    <>
      <div className="app">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
};

export default App;
