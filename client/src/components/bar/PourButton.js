import React, { useState } from "react";

function PourButton({ selectedItem, onPour }) {
  const [quantity, setQuantity] = useState(50);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handlePourButtonClick = () => {
    if (selectedItem) {
      onPour({ name: selectedItem, quantity: quantity });
    } else {
      console.log("No item selected");
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handlePourButtonClick}>
        Pour
      </button>
      <select value={quantity} onChange={handleQuantityChange}>
        {[50, 100, 150, 200, 250].map((value) => (
          <option key={value} value={value}>
            {value}ml
          </option>
        ))}
      </select>
    </div>
  );
}

export default PourButton;
