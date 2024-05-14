import { useContext } from "react";
import DrinkContext from "../../contexts/DrinkContext";
const SaveDrinkButton = () => {
  const { cupContent } = useContext(DrinkContext);

  const handleClick = () => {
    if (cupContent.length > 0) {
      const savedDrinks = localStorage.getItem("savedDrinks");
      const drinksArray = JSON.parse(savedDrinks);
      if (savedDrinks == null) {
        localStorage.setItem("savedDrinks", JSON.stringify([cupContent]));
      } else if (drinksArray.length < 10) {
        drinksArray.push(cupContent);
        localStorage.setItem("savedDrinks", JSON.stringify(drinksArray));
      } else {
        drinksArray.shift();
        drinksArray.push(cupContent);
        localStorage.setItem("savedDrinks", JSON.stringify(drinksArray));
      }
    } else {
      //TODO: add error modal
      alert("Please add at least one ingredient to your cup.");
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleClick}
    >
      Save drink
    </button>
  );
};

export default SaveDrinkButton;
