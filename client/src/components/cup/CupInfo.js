const CupInfo = ({ currentCapacity, cupContent }) => {
  // TODO: make cupDetails dynamic
  const cupDetails = {
    imgSrc: "simple-glass.svg",
    capacity: "450",
  };

  if (!cupDetails) {
    return <p>No cup data available.</p>;
  }

  return (
    <div>
      <h2>Capacity: {currentCapacity}</h2>
      {cupContent.length !== 0 && (
        <div>
          <h2>So far you have poured: </h2>
          {cupContent.map((ingredient, index) => {
            return (
              <h2 key={index} className="bg-sky-500/50 my-4">
                {ingredient.name} : {ingredient.quantity} ml
              </h2>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CupInfo;
