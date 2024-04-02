import React, { useState, useEffect } from "react";
import CupInfo from "./CupInfo";
function Cup({ cupData, selectedDrink }) {
  const [currentCapacity, setCurrentCapacity] = useState(cupData.capacity);

  useEffect(() => {
    console.log(selectedDrink);
    if (selectedDrink != null) {
      if (currentCapacity - selectedDrink.quantity >= 0) {
        setCurrentCapacity(currentCapacity - selectedDrink.quantity);
      } else {
        alert("No space available");
      }
    }
  }, [selectedDrink]);

  useEffect(() => {
    setCurrentCapacity(cupData.capacity);
  }, [cupData]);
  return (
    <div>
      <img
        src={`/images/cups/${cupData.imgSrc}`}
        alt="Not available"
        className="w-24 h-32 mb-2"
      />
      <CupInfo cupData={cupData} currentCapacity={currentCapacity}></CupInfo>
    </div>
  );
}

export default Cup;
