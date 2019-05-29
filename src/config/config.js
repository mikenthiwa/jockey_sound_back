const fs = require('fs');
const env = require('../environment/env');

module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL",
    "username": env.database.db_username,
    "password": env.database.db_password,
    "database": env.database.db_name,
    "host": "127.0.0.1",
    "dialect": env.database.db_dialect,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
  }
};
