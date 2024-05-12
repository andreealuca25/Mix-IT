import { useContext, useEffect, useState } from "react";
import CupInfo from "./CupInfo";
import ContentCalculator from "./ContentCalculator";
import DrinkContext from "../../contexts/DrinkContext";
import DrinkGlass from "./DrinkGlass";
import { blendHexColors } from "../../utils/colorConverter";

function Cup() {
  const { currentCapacity } = useContext(DrinkContext);
  const { cupContent, setCupContent } = useContext(DrinkContext);
  const [calculationResult, setCalculationResult] = useState([]);
  const [fillColor, setFillColor] = useState("");
  const [fillLevel, setFillLevel] = useState(0);

  console.log("CUPS");
  console.log(cupContent);

  useEffect(() => {
    if (cupContent.length === 1) {
      setFillColor(cupContent[0].color);
      setFillLevel(cupContent[0].quantity);
    } else if (cupContent.length !== 0) {
      const lastDrinkAdded = cupContent[cupContent.length - 1];
      setFillColor(blendHexColors(fillColor, lastDrinkAdded.color));
      setFillLevel(fillLevel + lastDrinkAdded.quantity);
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
        <ContentCalculator
          cupContent={cupContent}
          setCalculationResult={setCalculationResult}
        />
      )}
      <DrinkGlass
        fillLevel={fillLevel}
        fillColor={fillColor}
        glassCapacity={500}
      />

      <CupInfo currentCapacity={currentCapacity} cupContent={cupContent} />
    </div>
  );
}

export default Cup;
