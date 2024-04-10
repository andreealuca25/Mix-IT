import React, { useState, useEffect, useContext } from "react";
import CupInfo from "./CupInfo";
import ContentCalculator from "./ContentCalculator";
import DrinkContext from "../../contexts/DrinkContext";

function Cup({ cupDetails, selectedDrink }) {
  const { currentCapacity, setCurrentCapacity } = useContext(DrinkContext);
  const { cupContent, setCupContent } = useContext(DrinkContext);
  const [calculationResult, setCalculationResult] = useState([]);

  useEffect(() => {
    /*reset the cup content and calculation result when the cup data changes*/
    setCurrentCapacity(cupDetails.capacity);
    setCupContent([]);
    setCalculationResult([]);
  }, [cupDetails]);

  return (
    <div>
      <img
        src={`/images/cups/${cupDetails.imgSrc}`}
        alt="Not available"
        className="w-24 h-32 mb-2"
      />
      <CupInfo cupDetails={cupDetails} currentCapacity={currentCapacity} />
      {calculationResult.length !== 0 ? (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Calculation Result</h2>
          {calculationResult.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="font-bold">{item.cocktail.cocktails}</p>
              <p className="text-gray-600">
                Match Percentage: {item.matchPercentage}
              </p>
              <div className="mt-1">
                <p className="font-semibold">Missing Ingredients:</p>
                <ul className="list-disc list-inside">
                  {item.missingIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ContentCalculator
          cupContent={cupContent}
          setCalculationResult={setCalculationResult}
        />
      )}
    </div>
  );
}

export default Cup;
