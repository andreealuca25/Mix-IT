import Cup from "./Cup";
import SaveDrinkButton from "./SaveDrinkButton";
import PreviouslySavedContainer from "./previouslySaved/PreviouslySavedContainer";

function CupContainer() {
  return (
    <div>
      <PreviouslySavedContainer />
      <SaveDrinkButton />
      <Cup />
    </div>
  );
}

export default CupContainer;
