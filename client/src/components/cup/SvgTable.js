const SvgTable = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="w-1/2 h-auto"
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/*top*/}
        <rect
          x="10"
          y="30"
          width="180"
          height="40"
          fill="#8B4513"
          stroke="black"
          strokeWidth="2"
        />
        {/*table legs*/}
        <rect
          x="20"
          y="70"
          width="10"
          height="30"
          fill="#8B4513"
          stroke="black"
          strokeWidth="2"
        />
        <rect
          x="170"
          y="70"
          width="10"
          height="30"
          fill="#8B4513"
          stroke="black"
          strokeWidth="2"
        />
        <foreignObject x="10" y="30" width="180" height="40">
          <div className="flex justify-center items-center w-full h-full space-x-4">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SvgTable;
