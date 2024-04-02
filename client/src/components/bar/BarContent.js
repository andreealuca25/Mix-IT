import React, { useState } from "react";
import PaginationButtons from "./PaginationButtons";

function BarContent({ barData, setSelectedDrink,selectedDrink }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = barData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(barData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (imageName) => {
    setSelectedItem(imageName === selectedItem ? null : imageName); // Toggle selection
  };

  return (
    <div>
      <div className="grid grid-flow-col grid-rows-2 auto-cols-max gap-4">
        {currentItems.map((imageName, index) => (
          <div
            key={index}
            className={` bg-gray-200 p-4 rounded-md flex flex-col items-center justify-center cursor-pointer ${
              imageName === selectedDrink ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(imageName)}
          >
            <img
              src={`/images/bottles/${imageName}.png`}
              alt="Not available"
              className="w-24 h-32 mb-2"
            />
            <p>{imageName}</p>
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
