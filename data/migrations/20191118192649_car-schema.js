// implement changes -- npx knex migrate:latest
exports.up = function(knex) {
  knex.schema.createTable('cars', table => {
    table.increments('id')
    table
      .string('model', 128) // creates string column
      .unique() // sets the column as unique
      .notNullable() // adds a not null on the current column being created.
    table
      .string('make', 128) // 128 specifies size
      .unique()
      .notNullable()
    table
      .count('year')
      .unique()
      .notNullable()
  })
}

// rollback -- npx knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
}
