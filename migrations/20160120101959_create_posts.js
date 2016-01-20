
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function (t) {
    t.increments();
    t.string('author');
    t.string('body');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
