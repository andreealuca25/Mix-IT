import React from "react";

const CupInfo = ({ cupDetails, currentCapacity }) => {
  if (!cupDetails) {
    return <p>No cup data available.</p>;
  }

  const { fontFamily, capacity } = cupDetails;

  return (
    <div>
      <h2>Capacity: {currentCapacity}</h2>
    </div>
  );
};

export default CupInfo;
