import { useEffect, useState } from "react";
import DrinkGlass from "../DrinkGlass";
import { blendHexColors } from "../../../utils/colorConverter";

function PreviouslySavedDrinks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedDrinks, setSavedDrinks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("savedDrinks") !== null) {
      setSavedDrinks(JSON.parse(localStorage.getItem("savedDrinks")));
    }
  }, []);
  const goToPrevious = () => {
    const isFirstDrink = currentIndex === 0;
    const newIndex = isFirstDrink ? savedDrinks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastDrink = currentIndex === savedDrinks.length - 1;
    const newIndex = isLastDrink ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const blendCurrentDrink = () => {
    const currentDrink = savedDrinks[currentIndex];
    if (currentDrink.length === 0) return "#fffff";

    let currentColor = currentDrink[0].color;
    for (let i = 1; i < currentDrink.length; i++) {
      currentColor = blendHexColors(currentColor, currentDrink[i].color);
    }
    return currentColor;
  };

  const calculateFillLevel = () => {
    const currentDrink = savedDrinks[currentIndex];
    if (currentDrink.length === 0) return 0;

    let currentCapacity = currentDrink[0].quantity;
    for (let i = 1; i < currentDrink.length; i++) {
      currentCapacity += currentDrink[i].quantity;
    }
    return currentCapacity;
  };
  console.log("currentDrink: " + currentIndex);
  return savedDrinks.length > 0 ? (
    <div className="flex flex-row">
      <button onClick={goToPrevious}>Previous</button>
      <DrinkGlass
        fillLevel={calculateFillLevel()}
        fillColor={
          savedDrinks[currentIndex] != null ? blendCurrentDrink() : "#fffff"
        }
        glassCapacity={500}
      />
      <button onClick={goToNext}>Next</button>
      <p>{currentIndex}</p>
    </div>
  ) : (
    <div>There are no results available.</div>
  );
}

export default PreviouslySavedDrinks;
