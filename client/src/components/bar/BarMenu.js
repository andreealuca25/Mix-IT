function BarMenu({ menuOption, setMenuOption }) {
  const barMenuItems = ["Alcoholic", "Non Alcoholic", "Other"];
  return (
    <div className="row-span-1 bg-amber-100 w-40 rounded-lg text-xs m-1">
      {barMenuItems.map((item, index) => (
        <button
          key={index}
          className={`w-36 m-1 text-center cursor-pointer py-2 px-4 rounded-lg ${
            menuOption === item
              ? "bg-amber-700 text-white"
              : "hover:bg-amber-200"
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
