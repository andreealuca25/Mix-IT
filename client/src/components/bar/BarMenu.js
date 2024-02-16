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
      case "Alcoholic":
        props.sendBarData([
          "bourbon",
          "gin",
          "Southern Comfort",
          "rye whiskey",
          "amaretto",
          "vodka",
          "rum",
          "Irish Whiskey",
          "scotch",
          "cognac",
          "tequila",
          "calvados",
          "citrus rum",
          "apple vodka",
          "applejack",
          "citrus vodka",
          "Van Gogh Wild Appel Vodka",
          "spiced rum",
          "raspberry vodka",
          "galliano",
          "white crème de cacao",
          "peach vodka",
          "Irish whiskey",
          "Jack Daniel's",
          "OP vodka",
          "currant vodka",
          "light rum",
          "Pimm's No. 1",
          "crème de noyau",
          "Seagram's Seven-Crown whiskey",
          "sloe gin",
          "orange vodka",
        ]);
        break;
      case "Non Alcoholic":
        props.sendBarData([
          "lime juice",
          "orange juice",
          "cranberry juice",
          "grapefruit juice",
          "Juice",
          "lemon juice",
          "pineapple juice",
        ]);
        break;
      case "Other":
        props.sendBarData([
          "egg white",
          "tonic water",
          "ginger ale",
          "lemon-lime soda",
          "maraschino",
          "cola",
          "olive brine",
          "orange bitters",
          "ginger beer",
          "7UP",
          "bottled water",
          "Angostura",
          "champagne",
          "Peychaud's",
          "sweet iced tea",
          "cream",
          "Coca-cola",
          "simple syrup",
          "grenadine",
          "club soda",
        ]);
        break;
      default:
        console.log("Default");
        break;
    }
  }, [menuOption]);

  // const fetchDataFromServer = (endpointName) => {
  //   fetch(endpointName)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       props.sendBarData(data);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // };
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
