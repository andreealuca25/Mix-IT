import React, { useState } from "react";
import PaginationButtons from "./PaginationButtons";
import PourButton from "./PourButton";

function BarContent({ barData }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item

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
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((imageName, index) => (
          <div
            key={index}
            className={`bg-gray-200 p-4 rounded-md flex flex-col items-center justify-center cursor-pointer ${
              imageName === selectedItem ? "border-2 border-blue-500" : ""
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
      <div style={{ marginTop: "20px" }}>
        <PourButton selectedItem={selectedItem} />
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
