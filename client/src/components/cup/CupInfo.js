import React from "react";

const CupInfo = ({ cupData }) => {
  if (!cupData) {
    return <p>No cup data available.</p>;
  }

  const { name, fontFamily } = cupData;

  return (
    <div className={`cup-info ${fontFamily}`}>
      <h2>{name}</h2>
    </div>
  );
};

export default CupInfo;
