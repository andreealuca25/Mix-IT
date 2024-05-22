import { useContext } from "react";
import DrinkContext from "../../contexts/DrinkContext";

const BarContent = ({ currentItems }) => {
  const { selectedDrink, setSelectedDrink } = useContext(DrinkContext);

  const handleImageClick = (drink) => {
    setSelectedDrink(
      drink.name === selectedDrink?.name
        ? null
        : { name: drink.name, color: drink.color, quantity: 50 }
    );
  };

  return (
    <div>
      <div className="grid w-[38rem] h-[17rem] grid-rows-2 grid-cols-5 gap-4 text-xs">
        {currentItems.map((currentItem, index) => (
          <div
            key={index}
            className={`bg-white rounded-md flex flex-col items-center justify-center cursor-pointer ${
              currentItem.name === selectedDrink?.name
                ? "border-2 border-amber-500"
                : ""
            }`}
            onClick={() => handleImageClick(currentItem)}
          >
            <img
              src={`/images/bottles/${currentItem.name}.png`}
              alt="Not available"
              className="w-26 h-26"
            />
            <p className="text-center text-amber-900">{currentItem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarContent;
