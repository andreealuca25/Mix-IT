import React, { useState, useEffect } from "react";
import BarMenu from "./BarMenu";
import BarSearchbar from "./BarSearchbar";
import BarContent from "./BarContent";
import PourButton from "./PourButton";

function BarContainer({ setSelectedDrink,selectedDrink }) {

  const [barData, setBarData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let filteredData = barData;

    if (searchText) {
      filteredData = barData.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }, [searchText, barData]);

  const filteredBarData = barData.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  const handlePourDrink = (selectedDrink) => {
    onPour(selectedDrink);
  };

  return (
    <div className="flex flex-auto flex-col h-full bg-gray-100 rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-300">
        <BarSearchbar
          sendSearchText={(searchText) => {
            setSearchText(searchText);
          }}
        />
      </div>
        <div className="flex p-6 border-b border-gray-300">
            <BarMenu
                sendBarData={(data) => {
                    setBarData(data);
                }}
            />

            <BarContent barData={filteredBarData} selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink}/>
        </div>
        <PourButton selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink}/>

    </div>
  );
}

export default BarContainer;
