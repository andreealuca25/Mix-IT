function PaginationButtons({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="w-[400px] mx-auto mt-3 col-start-2">
      <button
        onClick={handlePrevPage}
        className="mx-2 px-2 py-1 rounded-md bg-blue-500 text-white"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-2 px-2 py-1 rounded-md ${
            page === currentPage ? "bg-blue-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="mx-2 px-2 py-1 rounded-md bg-blue-500 text-white"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
