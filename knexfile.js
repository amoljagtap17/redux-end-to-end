// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'redux_end_to_end',
    user: 'postgres',
    password: 'admin123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
