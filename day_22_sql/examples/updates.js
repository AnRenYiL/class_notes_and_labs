const knex = require('../migrations/client');
knex('posts')
    .where('id', 2)
    .update({
        title: 'im a post with the id of 2',
    })
    .then((data) => {
        console.log(data);
        knex.destroy();
    });