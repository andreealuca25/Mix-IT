import React, { useState } from "react";
import Title from "./components/title/Title";
import BarContainer from "./components/bar/BarContainer";
import PreviouslySavedContainer from "./components/cup/previouslySaved/PreviouslySavedContainer";
import CupContainer from "./components/cup/CupContainer";
import "./index.css";

function App() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const handlePourDrink = (selectedDrink) => {
    setSelectedDrink(selectedDrink);
  };
  return (
    <div className="flex flex-col h-screen">
      <Title />
      <div className="mx-4 flex justify-between">
        <BarContainer onPour={handlePourDrink} />
        <CupContainer selectedDrink={selectedDrink} />
      </div>
    </div>
  );
}

export default App;
