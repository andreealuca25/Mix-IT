import { useContext, useState } from "react";
import DrinkContext from "../../contexts/DrinkContext";

function PourButton() {
  const [quantity, setQuantity] = useState(50);
  const QUANTITY_VALUES = [50, 100, 150, 200, 250];
  const {
    selectedDrink,
    setSelectedDrink,
    cupContent,
    setCupContent,
    currentCapacity,
    setCurrentCapacity,
  } = useContext(DrinkContext);

  const handlePourButtonClick = () => {
    if (selectedDrink) {
      if (quantity !== 50) {
        setSelectedDrink({
          ...selectedDrink,
          quantity: quantity,
        });
      }

      if (currentCapacity - quantity >= 0) {
        setCurrentCapacity(currentCapacity - quantity);
        const drinkName = selectedDrink.name;
        const existingDrinkQuantity = cupContent[drinkName]
          ? cupContent[drinkName].quantity
          : 0;

        if (existingDrinkQuantity > 0) {
          setCupContent({
            ...cupContent,
            [drinkName]: {
              color: selectedDrink.color,
              quantity: existingDrinkQuantity + quantity,
            },
          });
        } else {
          setCupContent({
            ...cupContent,
            [drinkName]: {
              color: selectedDrink.color,
              quantity: quantity,
            },
          });
        }
      } else {
        alert("No space available or not selected"); // TODO: add error handling
      }
    }
  };

  return (
    <div className="flex items-center space-x-3 text-xs">
      <button
        className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-700 transition"
        onClick={handlePourButtonClick}
      >
        Pour
      </button>
      <select
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="px-2 py-1 rounded-md bg-amber-200 text-amber-900"
      >
        {QUANTITY_VALUES.map((value) => (
          <option key={value} value={value}>
            {value}ml
          </option>
        ))}
      </select>
    </div>
  );
}

export default PourButton;
