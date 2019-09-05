const knex = require('../migrations/client');

knex("posts")
    .insert({
        title: "first post!",
        content: "inserting stuff into our posts table with knex"
    }).returning('title', 'content')
    .then((data) => {
        console.log(data);
    });

// if we wanted to insert multiple records in the same transaction
// we can pass an array to the insert function

knex("posts")
    .insert([{
            title: 'abc',
            content: '123'
        },
        {
            title: 'efg',
            content: '456'
        }
    ]);