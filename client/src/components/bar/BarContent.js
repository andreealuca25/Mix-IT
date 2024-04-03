import React, {useContext, useState} from "react";
import PaginationButtons from "./PaginationButtons";
import SelectedDrinkContext from "../../contexts/SelectedDrinkContext";

function BarContent({ barData }) {

const {selectedDrink,setSelectedDrink} = useContext(SelectedDrinkContext)

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = barData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(barData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (imageName) => {
      setSelectedDrink(imageName === selectedDrink?.name ? null : {name:imageName,quantity:50});
  };

  return (
    <div>
      <div className="grid w-[54em] h-[26em] grid-rows-2 grid-cols-5 gird-rows-2 gap-4">
        {currentItems.map((imageName, index) => (
          <div
            key={index}
            className={`bg-gray-200 rounded-md flex flex-col items-center justify-center cursor-pointer ${
              imageName === selectedDrink?.name ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(imageName)}
          >
            <img
              src={`/images/bottles/${imageName}.png`}
              alt="Not available"
              className="w-36 h-36"
            />
            <p className={'text-center'}>{imageName}</p>
          </div>
        ))}
      </div>

      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default BarContent;
