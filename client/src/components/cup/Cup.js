import React, { useState, useEffect } from "react";
import CupInfo from "./CupInfo";
import ContentCalculator from "./ContentCalculator";
function Cup({ cupData, selectedDrink }) {
  const [currentCapacity, setCurrentCapacity] = useState(cupData.capacity);
  const [cupContent, setCupContent] = useState([]);
  const [calculationResult, setCalculationResult] = useState([]);

  useEffect(() => {
    console.log(selectedDrink);
    if (selectedDrink != null) {
      if (currentCapacity - selectedDrink.quantity >= 0) {
        setCurrentCapacity(currentCapacity - selectedDrink.quantity);
        if (!cupContent.includes(selectedDrink.name))
          setCupContent([...cupContent, selectedDrink.name]);
      } else {
        alert("No space available");
      }
    }
  }, [selectedDrink]);

  useEffect(() => {
    /*when you reset the glass*/
    setCurrentCapacity(cupData.capacity);
    setCupContent([]);
  }, [cupData]);

  const handleCalculationResult = (result) => {
    setCalculationResult(result);
  };
  return (
    <div>
      {calculationResult.length != 0 ? (
        <div>
          {calculationResult.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      ) : (
        <ContentCalculator
          cupContent={cupContent}
          onCompleteCalculation={handleCalculationResult}
        />
      )}
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
