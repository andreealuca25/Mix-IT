const { Client } = require("pg");
const XLSX = require("xlsx");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "mixit",
  password: "lol123321",
  port: 5432,
});

client.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

  const workbook = XLSX.readFile("../db/drink-recipes.xlsx");
  const sheetName = workbook.SheetNames[0];
  const cocktailsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cocktails (
      id SERIAL PRIMARY KEY,
      cocktails VARCHAR(255),
      base VARCHAR(255),
      liqueur VARCHAR(255),
      juice VARCHAR(255),
      mixer VARCHAR(255),
      additional_juice VARCHAR(255),
      additional_base VARCHAR(255),
      garnish VARCHAR(255),
      other VARCHAR(255)
    );
  `;

  client.query(createTableQuery, (err, res) => {
    if (err) {
      console.error(err);
      client.end();
    } else {
      console.log("Table created successfully");
    }
  });

  const insertQuery = `
    INSERT INTO cocktails (
      cocktails, base, liqueur, juice, mixer,
      additional_juice, additional_base, garnish, other
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
  `;

  for (let i = 0; i < cocktailsData.length; i++) {
    client.query(
      insertQuery,
      [
        cocktailsData[i].Cocktails,
        cocktailsData[i].Base,
        cocktailsData[i].Liqueur,
        cocktailsData[i].Juice,
        cocktailsData[i].Mixer,
        cocktailsData[i]["Additional Juice"],
        cocktailsData[i]["Additional base"],
        cocktailsData[i].Garnish,
        cocktailsData[i].Other,
      ],
      (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Data inserted successfully", i);
        }
      }
    );
  }
});
