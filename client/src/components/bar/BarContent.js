import React, { useState } from "react";
import PaginationButtons from "./PaginationButtons";

function BarContent({ barData }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = barData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(barData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md">
            <p className="text-center">{item}</p>
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
