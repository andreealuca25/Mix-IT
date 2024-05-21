import { useContext, useEffect, useState } from "react";
import CupInfo from "./CupInfo";
import ContentCalculator from "./ContentCalculator";
import DrinkContext from "../../contexts/DrinkContext";
import DrinkGlass from "./DrinkGlass";
import { blendHexColors } from "../../utils/colorConverter";
import SaveDrinkButton from "./SaveDrinkButton";

function Cup() {
  const { currentCapacity } = useContext(DrinkContext);
  const { cupContent, selectedDrink } = useContext(DrinkContext);
  const [calculationResult, setCalculationResult] = useState([]);
  const [fillColor, setFillColor] = useState("");
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    if (Object.keys(cupContent).length == 1) {
      const singleDrink = Object.values(cupContent)[0];
      setFillColor(singleDrink.color);
      setFillLevel(singleDrink.quantity);
    } else if (Object.keys(cupContent).length > 1) {
      setFillColor(blendHexColors(fillColor, selectedDrink.color));
      setFillLevel(fillLevel + selectedDrink.quantity);
    }
  }, [cupContent]);
  return (
    <div>
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
        <>
          <DrinkGlass
            fillLevel={fillLevel}
            fillColor={fillColor}
            glassCapacity={500}
          />

          <CupInfo currentCapacity={currentCapacity} cupContent={cupContent} />
          <ContentCalculator
            cupContent={cupContent}
            setCalculationResult={setCalculationResult}
          />
          <SaveDrinkButton />
        </>
      )}
    </div>
  );
}

export default Cup;
