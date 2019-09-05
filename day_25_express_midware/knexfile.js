// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "express_adventure_c33"
    },
    migrations: {
      directory: "./db/migrations"
    }
  }

};