import React, { useState } from "react";
import BarMenu from "./BarMenu";
import BarSearchbar from "./BarSearchbar";
import BarContent from "./BarContent";

function BarContainer() {
  const [barData, setBarData] = useState([]);
  const handleBarData = (data) => {
    setBarData(data);
  };
  return (
    <div className="flex flex-col h-full bg-gray-100 rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-300">
        <BarSearchbar />
      </div>
      <div className="flex justify-between items-center p-6 border-b border-gray-300">
        <BarMenu sendBarData={handleBarData} />
        <BarContent barData={barData} />
      </div>
    </div>
  );
}

export default BarContainer;
