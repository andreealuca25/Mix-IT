import React, { useState, useEffect } from "react";
import {
  otherBeverages,
  nonAlcoholicBeverages,
  alcoholicBeverages,
} from "../../utils/beverages";
function BarMenu(props) {
  const barMenuItems = ["Alcoholic", "Non Alcoholic", "Other"];
  const [menuOption, setMenuOption] = useState("Alcoholic");

  const handleChooseOption = (event) => {
    const chosenOption = event.target.textContent;
    setMenuOption(chosenOption);
  };

  useEffect(() => {
    switch (menuOption) {
      case "Alcoholic":
        props.sendBarData(alcoholicBeverages);
        break;
      case "Non Alcoholic":
        props.sendBarData(nonAlcoholicBeverages);
        break;
      case "Other":
        props.sendBarData(otherBeverages);
        break;
      default:
        console.log("Default");
        break;
    }
  }, [menuOption]);

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h1 className="text-lg font-semibold mb-2">Menu</h1>
      <ul>
        {barMenuItems.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-4 rounded-lg ${
              menuOption === item
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={handleChooseOption}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BarMenu;
