exports.up = function (knex) {
    return knex.schema.createTable('posts', table => {
        //creat a column called id with the type of bigint that also increments
        table.bigIncrements('id');
        //creat a column 'titile' with type of string
        table.string('title');
        //column 'content' with type text
        table.text('content');
        // created and updated at timestamps
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts');
};