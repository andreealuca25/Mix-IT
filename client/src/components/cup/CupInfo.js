import React from "react";

const CupInfo = ({ cupData, currentCapacity }) => {
  if (!cupData) {
    return <p>No cup data available.</p>;
  }

  const { name, fontFamily, capacity } = cupData;

  return (
    <div className={`cup-info ${fontFamily}`}>
      <h2>{name}</h2>
      <h2>Capacity: {currentCapacity}</h2>
    </div>
  );
};

export default CupInfo;
