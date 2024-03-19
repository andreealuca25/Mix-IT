import React from "react";

function PourButton({ selectedItem }) {
  const handlePourButtonClick = () => {
    if (selectedItem) {
      console.log("Pouring", selectedItem);
      // Add logic for pouring the drink with the selectedItem
    } else {
      console.log("No item selected");
      // Handle case where no item is selected
    }
  };

  return (
    <button className="btn btn-primary" onClick={handlePourButtonClick}>
      Pour
    </button>
  );
}

export default PourButton;
