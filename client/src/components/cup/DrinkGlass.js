//TODO: add more custom glasses with different shapes and capacities
const DrinkGlass = ({
  fillLevel = 0,
  fillColor = 'blue',
  glassCapacity = 450,
}) => {
  const glassHeight = 100
  const fillHeight = (glassHeight * fillLevel) / glassCapacity

  console.log('fillcolor', fillColor)
  const styles = {
    glass: {
      width: '80px',
      height: `${glassHeight}px`,
      border: '2px solid black',
      position: 'relative',
      margin: '20px',
    },
    drink: {
      width: '100%',
      height: `${fillHeight}px`,
      backgroundColor: fillColor,
      position: 'absolute',
      bottom: 0,
    },
  }

  return (
    <div style={styles.glass}>
      <div style={styles.drink}></div>
    </div>
  )
}

export default DrinkGlass
