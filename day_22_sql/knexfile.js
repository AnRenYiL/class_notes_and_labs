// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'day_22_sql_db'
    }
  },
  migrations: {
    tableName: 'migrations',
    directory: 'db',
  }
};