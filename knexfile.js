var dotenv = require('dotenv').config()

// Update with your config settings.
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'blog3'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
