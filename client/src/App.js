import React, { useState } from "react";
import Title from "./components/title/Title";
import BarContainer from "./components/bar/BarContainer";
import CupContainer from "./components/cup/CupContainer";
import "./index.css";

function App() {
  const [selectedDrink, setSelectedDrink] = useState(null);

  return (
    <div className="flex flex-col h-screen">
      <Title />
      <div className="mx-4 flex ">
        <BarContainer selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink} />
        <CupContainer selectedDrink={selectedDrink} />
      </div>
    </div>
  );
}

export default App;
