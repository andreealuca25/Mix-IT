import React, { useState, useEffect } from "react";
import { cupTypes } from "../../utils/cups";
import Cups from "./Cups";
import CupActionButton from "./CupActionButton";
import PreviouslySavedContainer from "./previouslySaved/PreviouslySavedContainer";

function CupContainer({ selectedDrink }) {
  const [cupData, setCupData] = useState([]);
  return (
    <div>
      <PreviouslySavedContainer />
      <CupActionButton actionType="save" cupData={cupData} />
      <CupActionButton actionType="delete" cupData={cupData} />
      <Cups cups={cupTypes} selectedDrink={selectedDrink}></Cups>
    </div>
  );
}

export default CupContainer;
