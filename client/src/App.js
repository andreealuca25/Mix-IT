import React from "react";
import Title from "./components/title/Title";
import BarContainer from "./components/bar/BarContainer";
import PreviouslySavedContainer from "./components/previouslySaved/PreviouslySavedContainer";
import CupContainer from "./components/cup/CupContainer";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Title />
      <div className="app-header w-full text-right p-10">
        <PreviouslySavedContainer />
      </div>
      <div className="app-footer flex justify-between">
        <BarContainer />
        <CupContainer />
      </div>
    </div>
  );
}

export default App;
