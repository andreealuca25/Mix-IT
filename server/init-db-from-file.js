const { Client } = require("pg");
const XLSX = require("xlsx");

const client = new Client({
  user: "mixit",
  host: "localhost",
  database: "{mixit}",
  password: "mixit",
  port: 5432,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  const workbook = XLSX.readFile("../db/drink-recipes.xlsx");
  const sheetName = workbook.SheetNames[0];
  const cocktailsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cocktails (
      id SERIAL PRIMARY KEY,
      Cocktails VARCHAR(255),
      Base VARCHAR(255),
      Liqueur VARCHAR(255),
      Juice VARCHAR(255),
      Mixer INTEGER,
      "Additional Juice" INTEGER,
      "Additional base" VARCHAR(255),
      Garnish INTEGER,
      Other INTEGER
    );
    `;
  client.query(createTableQuery, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Table created successfully");
    }
    client.end();
  });
  const query = `
  INSERT INTO cocktails (
    "Cocktails", "Base", "Liqueur", "Juice", "Mixer",
    "Additional Juice", "Additional base", "Garnish", "Other"
  ) VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9
  ) RETURNING *;
`;

  cocktailsData.forEach((cocktailData) => {
    client.query(
      query,
      [
        cocktailData.Cocktails,
        cocktailData.Base,
        cocktailData.Liqueur,
        cocktailData.Juice,
        cocktailData.Mixer,
        cocktailData["Additional Juice"],
        cocktailData["Additional base"],
        cocktailData.Garnish,
        cocktailData.Other,
      ],
      (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Data inserted successfully:", res.rows[0]);
        }
      }
    );
  });

  client.end();
});
