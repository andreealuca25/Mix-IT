function BarSearchbar(props) {
  const handleSearchInput = (e) => {
    props.sendSearchText(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="search-bar-input px-4 py-2 rounded-lg bg-white text-amber-900 text-xs"
      onChange={handleSearchInput}
    />
  );
}

export default BarSearchbar;
