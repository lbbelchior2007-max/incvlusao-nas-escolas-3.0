const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não configurada. Copie .env.example para .env e configure o PostgreSQL.');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
pool.on('error', (err) => console.error('Erro inesperado no pool PostgreSQL:', err.message));

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
