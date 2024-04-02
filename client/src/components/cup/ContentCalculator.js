import React, { useState, useEffect } from "react";
function ContentCalculator({ cupContent, onCompleteCalculation }) {
  const calculateDrink = () => {
    onCompleteCalculation(cupContent);
  };
  return <button onClick={calculateDrink}>Calculate Drink</button>;
}

export default ContentCalculator;
