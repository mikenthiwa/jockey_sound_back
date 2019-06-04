const fs = require('fs');
const env = require('../environment/env');

const defaultConfig = {
  "use_env_variable": "DATABASE_URL",
  "username": env.database.db_username,
  "password": env.database.db_password,
  "database": env.database.db_name,
  "host": "127.0.0.1",
  "dialect": env.database.db_dialect,
};

module.exports = {
  "development": {
    ...defaultConfig
  },
  "test": {
    ...defaultConfig,
    use_env_variable: 'TEST_DATABASE_URL',
    database: env.database.test_db_name
  },
  "production": {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    }
  }
};
