function CalculationResult({ calculationResult }) {
  return (
    <>
      {calculationResult.length !== 0 && (
        <div className="bg-amber-100 p-4 rounded-lg overflow-y-scroll h-40 w-128">
          <h2 className="text-sm font-bold mb-2 text-amber-900">
            Calculation Result
          </h2>
          {calculationResult.map((item, index) => (
            <div key={index} className="border-b border-amber-300 py-2">
              <p className="font-bold text-amber-800">
                {item.cocktail.cocktails}
              </p>
              <p className="text-amber-700 text-xs">
                Match Percentage: {item.matchPercentage}
              </p>
              <div className="mt-1">
                <p className="font-semibold text-amber-800 text-xs">
                  Missing Ingredients:
                </p>
                <ul className="list-disc list-inside text-amber-700 text-xs">
                  {item.missingIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CalculationResult;
