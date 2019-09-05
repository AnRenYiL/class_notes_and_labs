exports.up = function (knex) {
    return knex.schema.createTable('articles', table => {
        table.bigIncrements('id');
        table.string('title');
        table.string('username');
        table.text('content');
        table.integer('viewCount');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('articles');
};