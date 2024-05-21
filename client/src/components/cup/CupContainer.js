import Cup from "./Cup";
import SelectedBottles from "../bottles/SelectedBottles";

function CupContainer() {
  return (
    <div className={"flex justify-around"}>
      <SelectedBottles />
      <Cup />
    </div>
  );
}

export default CupContainer;
