import React, {createContext, useState} from "react";

const SelectedDrinkContext = createContext();

export const SelectedDrinkProvider = ({children}) => {
    const [selectedDrink,setSelectedDrink] = useState();

    const contextValue = {
        selectedDrink,
        setSelectedDrink
    }
    return (
        <SelectedDrinkContext.Provider value={contextValue} >
            {children}
        </SelectedDrinkContext.Provider>
    )
}
export default SelectedDrinkContext;