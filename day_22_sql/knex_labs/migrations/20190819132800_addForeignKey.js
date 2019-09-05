exports.up = function (knex) {
    return knex.schema.table('populations', table => {
        table.foreign('country_id').references('countries.id')
    });
};

exports.down = function (knex) {
    return knex.schema.table('populations', function (table) {
        table.dropForeign('country_id', ['id']);
    });
};