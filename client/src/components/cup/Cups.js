import React, {useContext, useState} from "react";
import CupNavigationButton from "./CupNavigationButton";
import Cup from "./Cup";
import SelectedDrinkContext from "../../contexts/SelectedDrinkContext";

const Cups = ({ cups }) => {
  const [currentCupIndex, setCurrentCupIndex] = useState(0);
  const {selectedDrink,setSelectedDrink} = useContext(SelectedDrinkContext)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <CupNavigationButton
          buttonType="Left"
          currentCupIndex={currentCupIndex}
          setCupIndex={setCurrentCupIndex}
          totalCups={cups.length}
        />
        <div className="mx-2">
          <Cup cupData={cups[currentCupIndex]} selectedDrink={selectedDrink} />
        </div>
        <CupNavigationButton
          buttonType="Right"
          currentCupIndex={currentCupIndex}
          setCupIndex={setCurrentCupIndex}
          totalCups={cups.length}
        />
      </div>
    </div>
  );
};

export default Cups;
