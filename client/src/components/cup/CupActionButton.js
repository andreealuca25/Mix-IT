const CupActionButton = ({ actionType, cupData }) => {
  const handleClick = () => {
    if (actionType === "save") {
      console.log("Saving cup:", cupData);
    } else if (actionType === "delete") {
      console.log("Deleting cup:", cupData);
    }
  };

  const buttonText = actionType === "save" ? "Save" : "Delete";
  const buttonClass = actionType === "save" ? "btn-save" : "btn-delete";

  return (
    <button className={`btn ${buttonClass}`} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default CupActionButton;
