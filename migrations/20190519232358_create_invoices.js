exports.up = function (knex, Promise) {
  return knex.schema.createTable('invoices', function (table) {
    table.increments()
    table.decimal('total').notNullable()
    table.string('email').notNullable()

    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('invoices')
}
