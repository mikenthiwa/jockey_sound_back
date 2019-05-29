import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  database: {
    use_env_variable: process.env.DATABASE_URL,
    db_name: process.env.DB_NAME,
    db_password: process.env.DB_PASSWORD,
    db_username: process.env.DB_USERNAME,
    db_dialect: process.env.DIALECT,
  }
};