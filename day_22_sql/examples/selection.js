const knex = require('../migrations/client.js');
knex.select('*').from('posts').whereRaw(`"created_at" > now() - interval '2' day`).then(data => {
    console.log(data);
    knex.destroy();
});
knex.count('* as count')
    .max('id as maxId')
    .sum('id as totalIds')
    .from('posts')
    .then(data => {
        console.log(data);
        knex.destroy(); // destroy the connection to the database
        // if the query is successful, the result of the query gets returned 
        // as an array of objects
        // as an array of objects. We acess the array from the argument in the callback
        // press to then()
    });