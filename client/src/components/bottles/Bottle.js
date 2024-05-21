import { useState, useContext } from "react";
import DrinkContext from "../../contexts/DrinkContext";

const Bottle = ({ name, quantity }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { cupContent, setCupContent, currentCapacity, setCurrentCapacity } =
    useContext(DrinkContext);

  const removeDrink = () => {
    setCurrentCapacity(currentCapacity + cupContent[name].quantity);
    const updatedContent = { ...cupContent };
    delete updatedContent[name];
    setCupContent(updatedContent);
  };
  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`/images/bottles/${name}.png`}
        alt={`${name} bottle`}
        className="w-12 h-12"
      />
      <p className="text-center text-sm">{quantity} ml</p>
      {isHovered && (
        <button
          className="absolute top-0 right-0 bg-transparent text-red-500 hover:text-red-700"
          onClick={removeDrink}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Bottle;
