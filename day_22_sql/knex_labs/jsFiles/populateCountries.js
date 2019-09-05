const data = require('../jsFiles/allCountries');
const knex = require('../migrations/client');
let allCountries = [];
for (const item of data) {
    const check = allCountries.some(({
        name
    }) => name == item.countryName);
    if (!check) {
        allCountries.push({
            name: item.countryName,
            code: item.countryCode
        });
    }
}
knex("countries")
    .insert(allCountries)
    .returning('name', 'code')
    .then((data) => {
        console.log(data);
    });