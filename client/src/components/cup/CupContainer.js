import React, { useState, useEffect } from "react";
import { cupTypes } from "../../utils/cups";
import Cups from "./Cups";
import CupActionButton from "./CupActionButton";

function CupContainer() {
  const [cupData, setCupData] = useState([]);
  return (
    <div>
      <Cups cups={cupTypes}></Cups>
      <CupActionButton actionType="save" cupData={cupData} />
      <CupActionButton actionType="delete" cupData={cupData} />
    </div>
  );
}

export default CupContainer;
