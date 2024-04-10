const database = require("../model/db");

const getAllAlcoholicBases = (req, res) => {
  database.query(
    "SELECT base FROM cocktails WHERE base IS NOT NULL AND base <> '0'",
    (err, result) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const bases = result.rows.flatMap((row) =>
          row.base.split(/,\s*|\s+or\s+/)
        );
        const uniqueAlcoholicBases = Array.from(
          new Set(
            bases.filter((base) => base.trim() !== "" && !base.includes("and"))
          )
        );

        res.status(200).json(uniqueAlcoholicBases);
      }
    }
  );
};

const getAllJuices = (req, res) => {
  database.query(
    "SELECT DISTINCT juice FROM cocktails WHERE juice IS NOT NULL AND juice <> '0'",
    (err, result) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const juices = result.rows.map((row) => row.juice.trim());

        res.status(200).json(juices);
      }
    }
  );
};

const getAllMixers = (req, res) => {
  database.query(
    "SELECT DISTINCT mixer FROM cocktails WHERE mixer IS NOT NULL AND mixer <> '0'",
    (err, result) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const mixers = result.rows.flatMap((row) =>
          row.mixer.split(/,\s*|\s+or\s+/)
        );
        const uniqueMixers = Array.from(
          new Set(
            mixers.filter(
              (mixer) => mixer.trim() !== "" && !mixer.includes("and")
            )
          )
        );

        res.status(200).json(uniqueMixers);
      }
    }
  );
};

const getAllLiqueurs = (req, res) => {
  database.query(
    "SELECT DISTINCT liqueur FROM cocktails WHERE liqueur IS NOT NULL AND liqueur <> '0'",
    (err, result) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const liqueurs = result.rows.flatMap((row) =>
          row.liqueur.split(/,\s*|\s+or\s+/)
        );
        const uniqueLiqueurs = Array.from(
          new Set(
            liqueurs.filter(
              (liqueur) => liqueur.trim() !== "" && !liqueur.includes("and")
            )
          )
        );

        res.status(200).json(uniqueLiqueurs);
      }
    }
  );
};

const calculateClosestDrinks = (req, res) => {
  const { ingredientsNames } = req.body;
  database.query("SELECT * FROM cocktails", (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const cocktails = result.rows;
      //TODO: add proper error handling
      const ingredientsList = ingredientsNames;
      console.log(ingredientsList);
      const topMatches = findClosestMatches(ingredientsList, cocktails);
      res.status(200).json(topMatches);
    }
  });
};
function findClosestMatches(ingredientsList, cocktails) {
  const matches = [];
  const regex =
    /^[a-zA-Z,\s]+$/; /*check if there are only letters, spaces and commas */
  for (const cocktail of cocktails) {
    /*improve this scoring method*/
    const matchScore = calculateMatchScore(ingredientsList, cocktail);
    const totalIngredients = Object.values(cocktail).filter((value) =>
      regex.test(value)
    ).length;
    const matchPercentage =
      Math.round((matchScore / totalIngredients) * 100 * 100) / 100;
    matches.push({ cocktail, matchPercentage });
  }

  matches.sort((a, b) => b.matchPercentage - a.matchPercentage);

  const topMatches = matches.slice(0, 5);

  for (const match of topMatches) {
    match.missingIngredients = getMissingIngredients(
      ingredientsList,
      match.cocktail
    );
  }

  return topMatches;
}

function calculateMatchScore(ingredientsList, cocktail) {
  let matchScore = 0;
  for (const key in cocktail) {
    if (ingredientsList.includes(cocktail[key])) {
      matchScore++;
    }
  }

  return matchScore;
}

function getMissingIngredients(ingredientsList, cocktail) {
  const missingIngredients = [];
  const regex = /^[a-zA-Z,\s]+$/;

  for (const key in cocktail) {
    const ingredient = cocktail[key];
    if (
      !ingredientsList.includes(ingredient) &&
      key != "cocktails" &&
      regex.test(ingredient)
    ) {
      missingIngredients.push(ingredient);
    }
  }

  return missingIngredients;
}

module.exports = {
  getAllAlcoholicBases,
  getAllJuices,
  getAllMixers,
  getAllLiqueurs,
  calculateClosestDrinks,
};
