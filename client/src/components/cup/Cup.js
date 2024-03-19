import React from "react";
import CupInfo from "./CupInfo";
function Cup({ cupData }) {
  return (
    <div>
      <img
        src={`/images/cups/${cupData.imgSrc}`}
        alt="Not available"
        className="w-24 h-32 mb-2"
      />
      <CupInfo cupData={cupData}></CupInfo>
    </div>
  );
}

export default Cup;
