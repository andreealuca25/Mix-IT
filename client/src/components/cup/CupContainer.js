import Cup from "./Cup";
import SelectedBottles from "../bottles/SelectedBottles";
import CalculationResult from "./CalculationResult";
import { useState } from "react";

function CupContainer() {
  const [calculationResult, setCalculationResult] = useState([]);

  return (
    <div className="flex justify-center items-start p-4 relative">
      <div className="absolute left-0 pl-4">
        <SelectedBottles />
      </div>
      <div className="flex flex-col items-center">
        <Cup setCalculationResult={setCalculationResult} />
      </div>
      <div className="absolute right-0 w-1/3">
        <CalculationResult calculationResult={calculationResult} />
      </div>
    </div>
  );
}

export default CupContainer;
