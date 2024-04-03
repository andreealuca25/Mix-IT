import React, {useContext, useState} from "react";
import SelectedDrinkContext from "../../contexts/SelectedDrinkContext";

function PourButton() {
    const [quantity, setQuantity] = useState(50);
    const QUANTITY_VALUES = [50, 100, 150, 200, 250]
    const {selectedDrink,setSelectedDrink} = useContext(SelectedDrinkContext)
    const handlePourButtonClick = () => {
        if (selectedDrink) {
            setSelectedDrink({...selectedDrink, quantity: quantity});
        } else {
            console.log("No item selected");
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={handlePourButtonClick}>
                Pour
            </button>
            <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                {QUANTITY_VALUES.map((value) => (
                    <option key={value} value={value}>
                        {value}ml
                    </option>
                ))}
            </select>
        </div>
    );
}

export default PourButton;
