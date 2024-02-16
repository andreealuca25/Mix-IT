import React, { useState } from "react";
import PaginationButtons from "./PaginationButtons";
import MyImage from "../../../public/images/bottles/bourbon.png";

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
      <img
        src={"/src/bourbon.png"}
        alt={"Not test"}
        className="w-full h-auto mb-2"
      />
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((imageName, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md text-center">
            {console.log(imageName)}
            <img
              src={`W:/IdeaProjects/Mix-IT/client/public/images/bottles/${imageName}.png`}
              alt={"Not available"}
              className="w-full h-auto mb-2"
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
