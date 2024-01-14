
 CREATE TABLE IF NOT EXISTS cocktails (
      id SERIAL PRIMARY KEY,
      cocktails VARCHAR(255),
      base VARCHAR(255),
      liqueur VARCHAR(255),
      juice VARCHAR(255),
      mixer VARCHAR(255),
      additional_juice INTEGER,
      additional_base VARCHAR(255),
      garnish INTEGER,
      other INTEGER
    );