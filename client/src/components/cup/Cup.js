import { useContext, useEffect, useState } from "react";
import ContentCalculator from "./ContentCalculator";
import DrinkContext from "../../contexts/DrinkContext";
import DrinkGlass from "./DrinkGlass";
import { blendHexColors } from "../../utils/colorConverter";
import SaveDrinkButton from "./SaveDrinkButton";
import SvgTable from "./SvgTable";

function Cup({ setCalculationResult }) {
  const { currentCapacity } = useContext(DrinkContext);
  const { cupContent } = useContext(DrinkContext);
  const [fillColor, setFillColor] = useState("");
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    if (Object.keys(cupContent).length === 1) {
      const singleDrink = Object.values(cupContent)[0];
      setFillColor(singleDrink.color);
      setFillLevel(singleDrink.quantity);
    } else if (Object.keys(cupContent).length > 1) {
      const updatedColor = Object.keys(cupContent).reduce((acc, key, index) => {
        if (index === 0) return cupContent[key].color;
        return blendHexColors(acc, cupContent[key].color);
      }, "#FFFFFF");

      const updatedLevel = Object.keys(cupContent).reduce(
        (total, key) => total + cupContent[key].quantity,
        0
      );

      setFillColor(updatedColor);
      setFillLevel(updatedLevel);
    } else {
      setFillColor("#FFFFFF");
      setFillLevel(0);
    }
  }, [cupContent]);

  return (
    <div className="flex flex-col items-center rounded-lg">
      <DrinkGlass
        fillLevel={fillLevel}
        fillColor={fillColor}
        glassCapacity={500}
        currentCapacity={currentCapacity}
        showCapacity={true}
      />
      <div className="-mt-6">
        <SvgTable>
          <ContentCalculator
            cupContent={cupContent}
            setCalculationResult={setCalculationResult}
          />
          <SaveDrinkButton />
        </SvgTable>
      </div>
    </div>
  );
}

export default Cup;
