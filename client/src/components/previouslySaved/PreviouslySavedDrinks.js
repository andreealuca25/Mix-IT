import { useEffect, useState } from "react";
import DrinkGlass from "../cup/DrinkGlass";
import { blendHexColors } from "../../utils/colorConverter";

function PreviouslySavedDrinks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedDrinks, setSavedDrinks] = useState({});

  useEffect(() => {
    const savedDrinksFromStorage = localStorage.getItem("savedDrinks");
    if (savedDrinksFromStorage !== null) {
      setSavedDrinks(JSON.parse(savedDrinksFromStorage));
    }
  }, []);

  const drinkKeys = Object.keys(savedDrinks);
  const currentDrinkKey = drinkKeys[currentIndex];

  const goToPrevious = () => {
    const isFirstDrink = currentIndex === 0;
    const newIndex = isFirstDrink ? drinkKeys.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastDrink = currentIndex === drinkKeys.length - 1;
    const newIndex = isLastDrink ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const blendCurrentDrink = () => {
    const currentDrink = savedDrinks[currentDrinkKey];
    if (!currentDrink || Object.keys(currentDrink).length === 0)
      return "#ffffff";

    let currentColor = Object.values(currentDrink)[0].color;

    Object.values(currentDrink).forEach((drink, index) => {
      if (index > 0) {
        currentColor = blendHexColors(currentColor, drink.color);
      }
    });

    return currentColor;
  };

  const calculateFillLevel = () => {
    const currentDrink = savedDrinks[currentDrinkKey];
    if (!currentDrink || Object.keys(currentDrink).length === 0) return 0;

    let currentCapacity = 0;

    Object.values(currentDrink).forEach((drink) => {
      currentCapacity += drink.quantity;
    });

    return currentCapacity;
  };

  return (
    drinkKeys.length > 0 && (
      <div className="p-4 rounded-md shadow-md">
        <h3 className="text-brown-900 text-m">Previously Saved Drinks</h3>
        <div className="flex flex-row items-center justify-between">
          <button
            onClick={goToPrevious}
            className="bg-amber-950 text-white text-xs p-1 rounded-full hover:bg-amber-700 transition shadow-lg w-24"
          >
            Previous
          </button>
          <DrinkGlass
            fillLevel={calculateFillLevel()}
            fillColor={
              savedDrinks[currentDrinkKey] != null
                ? blendCurrentDrink()
                : "#ffffff"
            }
            glassCapacity={500}
          />
          <button
            onClick={goToNext}
            className="bg-amber-950 text-white text-xs p-1 rounded-full hover:bg-amber-700 transition shadow-lg w-24"
          >
            Next
          </button>
        </div>
      </div>
    )
  );
}

export default PreviouslySavedDrinks;
