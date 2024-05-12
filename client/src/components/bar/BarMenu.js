function BarMenu({ menuOption, setMenuOption }) {
  const barMenuItems = ["Alcoholic", "Non Alcoholic", "Other"];
  return (
    <div className="row-span-1 bg-gray-100 w-48 rounded-lg p-4">
      <h1 className="text-lg font-semibold mb-2">Menu</h1>
      {barMenuItems.map((item, index) => (
        <button
          key={index}
          className={`w-36 m-1 text-center cursor-pointer py-2 px-4 rounded-lg ${
            menuOption === item ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => setMenuOption(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default BarMenu;
