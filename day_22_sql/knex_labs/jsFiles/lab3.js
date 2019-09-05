const knex = require('../migrations/client.js');

//#region 1
//Find all countries whose names begin with "b" ignoring case.
// knex.select('*')
//     .from('countries')
//     .whereRaw(`"name" ILIKE 'b%'`)
//     .then(data => {
//         console.log(data);
//         knex.destroy();
//     });
//#endregion

//#region 2
//Count how many countries have "central" in their name.
// knex.count('* as count')
//     .from('countries')
//     .whereRaw(`"name" ILIKE '%central%'`)
//     .then(data => {
//         console.log(data);
//         knex.destroy();
//     });
//#endregion

//#region 3
//Find all countries whose names begin with the same three letters as their code ignoring case.
//select substr(countries.name,1,3),count(*) from  countries group by substr(countries.name,1,3)
knex.select('*')
    .from('countries')
    .whereRaw(`"name" ILIKE "code"||'%'`)
    .then(data => {
        console.log(data);
        knex.destroy();
    });
//#endregion