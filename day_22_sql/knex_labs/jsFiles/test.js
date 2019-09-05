const data = require('../jsFiles/allCountries');
const knex = require('../migrations/client');
const countries = data.map(({
    countryName,
    countryCode
}) => ({
    name: countryName,
    code: countryCode
}))
knex('countries')
    .del()
    .then(() => {
        return knex('countries').insert(countries);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));