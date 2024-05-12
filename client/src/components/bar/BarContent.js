import { useContext, useEffect, useState } from "react";
import PaginationButtons from "./PaginationButtons";
import DrinkContext from "../../contexts/DrinkContext";

const BarContent = ({ barData }) => {
  const { selectedDrink, setSelectedDrink } = useContext(DrinkContext);
  console.log("Bar content rendered");
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [barData]);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = barData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(barData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (drink) => {
    setSelectedDrink(
      drink.name === selectedDrink?.name
        ? null
        : { name: drink.name, color: drink.color, quantity: 50 }
    );
  };
  return (
    <div>
      <div className="grid w-[54em] h-[26em] grid-rows-2 grid-cols-5 gird-rows-2 gap-4">
        {currentItems.map((currentItem, index) => (
          <div
            key={index}
            className={`bg-gray-200 rounded-md flex flex-col items-center justify-center cursor-pointer ${
              currentItem.name === selectedDrink?.name
                ? "border-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleImageClick(currentItem)}
          >
            <img
              src={`/images/bottles/${currentItem.name}.png`}
              alt="Not available"
              className="w-36 h-36"
            />
            <p className={"text-center"}>{currentItem.name}</p>
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
};

export default BarContent;
