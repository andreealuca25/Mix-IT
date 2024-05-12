import { useState } from "react";
import BarMenu from "./BarMenu";
import BarSearchbar from "./BarSearchbar";
import BarContent from "./BarContent";
import PourButton from "./PourButton";
import {
  alcoholicBeverages,
  nonAlcoholicBeverages,
  otherBeverages,
} from "../../utils/beverages";

const barData = {
  Alcoholic: alcoholicBeverages,
  "Non Alcoholic": nonAlcoholicBeverages,
  Other: otherBeverages,
};
function BarContainer() {
  const [menuOption, setMenuOption] = useState("Alcoholic");
  const [searchText, setSearchText] = useState("");

  const filteredBarData = barData[menuOption].filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-6 border-b border-gray-300">
        <BarSearchbar
          sendSearchText={(searchText) => {
            setSearchText(searchText);
          }}
        />
        <PourButton />
      </div>
      <div className="flex p-6 border-b border-gray-300">
        <BarMenu menuOption={menuOption} setMenuOption={setMenuOption} />

        <BarContent barData={filteredBarData} />
      </div>
    </div>
  );
}

export default BarContainer;
