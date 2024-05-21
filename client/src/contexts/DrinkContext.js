import { createContext, useState } from "react";

const DrinkContext = createContext({});

export const DrinkProvider = ({ children }) => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [cupContent, setCupContent] = useState({});
  const [currentCapacity, setCurrentCapacity] = useState(500);
  const [fillCup, setFillCup] = useState({ fillLevel: 0, fillColor: "" });

  const contextValue = {
    selectedDrink,
    setSelectedDrink,
    cupContent,
    setCupContent,
    currentCapacity,
    setCurrentCapacity,
  };
  return (
    <DrinkContext.Provider value={contextValue}>
      {children}
    </DrinkContext.Provider>
  );
};
export default DrinkContext;
