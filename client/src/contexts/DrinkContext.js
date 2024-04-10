import React, { createContext, useState } from "react";

const DrinkContext = createContext();

export const DrinkProvider = ({ children }) => {
  const [selectedDrink, setSelectedDrink] = useState();
  const [cupContent, setCupContent] = useState([]);
  const [currentCapacity, setCurrentCapacity] = useState(0);

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
