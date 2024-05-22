const DrinkGlass = ({
  fillLevel = 0,
  fillColor = "blue",
  glassCapacity = 500,
  currentCapacity,
  showCapacity = false,
}) => {
  const glassHeight = 100;
  const fillHeight = (glassHeight * fillLevel) / glassCapacity;

  const styles = {
    glass: {
      width: "80px",
      height: `${glassHeight}px`,
      border: "2px solid black",
      position: "relative",
      marginTop: "5px",
      marginLeft: "20px",
      marginRight: "20px",
    },
    drink: {
      width: "100%",
      height: `${fillHeight}px`,
      backgroundColor: fillColor,
      position: "absolute",
      bottom: 0,
    },
  };

  return (
    <>
      {showCapacity && <h2 className="text-xs">Capacity: {currentCapacity}</h2>}
      <div style={styles.glass}>
        <div style={styles.drink}></div>
      </div>
    </>
  );
};

export default DrinkGlass;
