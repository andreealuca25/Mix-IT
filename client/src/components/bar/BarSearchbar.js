function BarSearchbar(props) {
  const handleSearchInput = (e) => {
    props.sendSearchText(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search..."
      className="search-bar-input px-4 py-2 rounded-lg"
      onChange={handleSearchInput}
    />
  );
}

export default BarSearchbar;
