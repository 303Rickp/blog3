
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog', function(table){
    table.increments();
    table.string('name');
    table.string('entry');
    table.string('posted');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog')
};
