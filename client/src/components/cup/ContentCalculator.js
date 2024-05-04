function ContentCalculator(props) {
  const { cupContent, setCalculationResult } = props
  const calculateDrink = async () => {
    const ingredientsNames = cupContent.map((ingredient) => ingredient.name)

    try {
      const response = await fetch(
        'http://localhost:3000/beverage/calculateClosestDrinks',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ingredientsNames }),
        },
      )
      if (!response.ok) {
        throw new Error('Failed to fetch closest drinks')
      }
      const closestDrinksData = await response.json()
      setCalculationResult(closestDrinksData)
    } catch (error) {
      console.error('Error fetching closest drinks:', error.message)
    }
  }

  return (
    <button
      onClick={calculateDrink}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Calculate Drink
    </button>
  )
}

export default ContentCalculator
