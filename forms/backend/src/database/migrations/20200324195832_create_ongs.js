exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('cpf').notNullable();
    table.string('cep').notNullable();
    table.string('city').notNullable();
    table.string('state', 2).notNullable();
    table.string('neighborhood').notNullable();
    table.string('street').notNullable();
    table.string('number').notNullable();
    table.string('password').notNullable();
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
