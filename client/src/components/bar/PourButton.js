import React, { useContext, useState } from "react";
import DrinkContext from "../../contexts/DrinkContext";

function PourButton() {
  const [quantity, setQuantity] = useState(50);
  const QUANTITY_VALUES = [50, 100, 150, 200, 250];
  const { selectedDrink, setSelectedDrink } = useContext(DrinkContext);
  const { cupContent, setCupContent } = useContext(DrinkContext);
  const { currentCapacity, setCurrentCapacity } = useContext(DrinkContext);
  const handlePourButtonClick = () => {
    if (selectedDrink) {
      if (currentCapacity - quantity >= 0) {
        setCurrentCapacity(currentCapacity - quantity);
        const existingDrinkIndex = cupContent.findIndex(
          //check if the drink has already been poured
          (item) => item.name === selectedDrink.name
        );
        if (existingDrinkIndex !== -1) {
          const updatedCupContent = [...cupContent];
          updatedCupContent[existingDrinkIndex] = {
            ...updatedCupContent[existingDrinkIndex],
            quantity: updatedCupContent[existingDrinkIndex].quantity + quantity,
          };
          setCupContent(updatedCupContent);
        } else {
          setCupContent([
            ...cupContent,
            { ...selectedDrink, quantity: quantity },
          ]);
        }
      } else {
        alert("No space available or not selected"); //TODO: add error handling
      }
    }
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handlePourButtonClick}>
        Pour
      </button>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
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
