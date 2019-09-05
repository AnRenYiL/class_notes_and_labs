const knex = require('../migrations/client');
knex('posts')
    .where('id', 2)
    .del()
    .then((data) => {
        console.log(data)
    });