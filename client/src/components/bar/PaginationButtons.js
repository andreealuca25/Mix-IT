function PaginationButtons({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="w-[400px] mx-auto mt-3 col-start-2 text-xs">
      <button
        onClick={handlePrevPage}
        className="mx-1 px-2 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-700 transition"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-2 py-1 rounded-md ${
            page === currentPage
              ? "bg-amber-500 text-white"
              : "hover:bg-amber-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="mx-1 px-2 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-700 transition"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
