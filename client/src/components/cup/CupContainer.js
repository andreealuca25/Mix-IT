import { useState } from "react";
import Cup from "./Cup";
import CupActionButton from "./CupActionButton";
import PreviouslySavedContainer from "./previouslySaved/PreviouslySavedContainer";

function CupContainer() {
  // eslint-disable-next-line no-unused-vars
  const [cupData, setCupData] = useState([]);

  console.log("CUP Container");
  return (
    <div>
      <PreviouslySavedContainer />
      <CupActionButton actionType="save" cupData={cupData} />
      <CupActionButton actionType="delete" cupData={cupData} />
      <Cup />
    </div>
  );
}

export default CupContainer;
