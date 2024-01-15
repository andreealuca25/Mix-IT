const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mixit',
  password: 'lol123321',
  port: 5432,
});

module.exports = pool;