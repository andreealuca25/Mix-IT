import React, { useState, useEffect } from "react";

function BarMenu(props) {
  const barMenuItems = ["Alcoholic", "Non Alcoholic", "Other"];
  const [menuOption, setMenuOption] = useState("Alcoholic");

  const handleChooseOption = (event) => {
    const chosenOption = event.target.textContent;
    setMenuOption(chosenOption);
  };

  useEffect(() => {
    switch (menuOption) {
      case "Other":
        fetchDataFromServer("http://localhost:3000/beverage/getAllMixers");
        break;
      case "Alcoholic":
        fetchDataFromServer(
          "http://localhost:3000/beverage/getAllAlcoholicBases"
        );
        break;
      case "Non Alcoholic":
        fetchDataFromServer("http://localhost:3000/beverage/getAllJuices");
        break;
      default:
        console.log("Default");
        break;
    }
  }, [menuOption]);

  const fetchDataFromServer = (endpointName) => {
    fetch(endpointName)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        props.sendBarData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
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
