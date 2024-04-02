import React, { useState, useEffect } from "react";
import { cupTypes } from "../../utils/cups";
import Cups from "./Cups";
import CupActionButton from "./CupActionButton";

function CupContainer({ selectedDrink }) {
  const [cupData, setCupData] = useState([]);
  return (
    <div>
      <Cups cups={cupTypes} selectedDrink={selectedDrink}></Cups>
      <CupActionButton actionType="save" cupData={cupData} />
      <CupActionButton actionType="delete" cupData={cupData} />
    </div>
  );
}

export default CupContainer;
