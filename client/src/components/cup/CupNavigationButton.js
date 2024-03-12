import React from "react";

function CupNavigationButton({
  buttonType,
  currentCupIndex,
  setCupIndex,
  totalCups,
}) {
  const navigateCups = () => {
    if (buttonType === "Left") {
      setCupIndex(currentCupIndex > 0 ? currentCupIndex - 1 : totalCups - 1);
    } else if (buttonType === "Right") {
      setCupIndex(currentCupIndex < totalCups - 1 ? currentCupIndex + 1 : 0);
    }
  };

  return (
    <button className="btn btn-primary" onClick={navigateCups}>
      {buttonType}
    </button>
  );
}

export default CupNavigationButton;
