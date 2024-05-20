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
import PaginationButtons from "./PaginationButtons";

const barData = {
  Alcoholic: alcoholicBeverages,
  "Non Alcoholic": nonAlcoholicBeverages,
  Other: otherBeverages,
};
function BarContainer() {
  const [menuOption, setMenuOption] = useState("Alcoholic");
  const [searchText, setSearchText] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  let startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  let endIndex = startIndex + ITEMS_PER_PAGE;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredBarData = barData[menuOption].filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBarData.length / ITEMS_PER_PAGE);
  let currentItems = filteredBarData.slice(startIndex, endIndex);
  function handleMenu(item) {
    setMenuOption(item);
    setCurrentPage(1);
  }
  console.log("Test");
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-5 border-b border-gray-300">
        <BarSearchbar
          sendSearchText={(searchText) => {
            setSearchText(searchText);
          }}
        />
        <PourButton />
      </div>
      <div className="grid p-5 border-b border-gray-300">
        <BarMenu menuOption={menuOption} setMenuOption={handleMenu} />

        <BarContent currentItems={currentItems} />

        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default BarContainer;
