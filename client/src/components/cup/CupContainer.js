import React, { useState, useEffect } from "react";
import { cupDetails } from "../../utils/cups";
import Cup from "./Cup";
import CupActionButton from "./CupActionButton";
import PreviouslySavedContainer from "./previouslySaved/PreviouslySavedContainer";

function CupContainer({ selectedDrink }) {
  const [cupData, setCupData] = useState([]);
  return (
    <div>
      <PreviouslySavedContainer />
      <CupActionButton actionType="save" cupData={cupData} />
      <CupActionButton actionType="delete" cupData={cupData} />
      <Cup cupDetails={cupDetails} selectedDrink={selectedDrink}></Cup>
    </div>
  );
}

export default CupContainer;
