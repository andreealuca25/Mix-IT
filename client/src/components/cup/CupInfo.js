import React from "react";

const CupInfo = ({ cupDetails, currentCapacity, cupContent }) => {
  if (!cupDetails) {
    return <p>No cup data available.</p>;
  }

  const { fontFamily, capacity } = cupDetails;

  return (
    <div>
      <h2>Capacity: {currentCapacity}</h2>
      {cupContent.length !== 0 && (
        <div>
          <h2>So far you have poured: </h2>
          {cupContent.map((ingredient) => {
            return (
              <h2 className="bg-sky-500/50 my-4">
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
