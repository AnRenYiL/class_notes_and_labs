const add = require('./add.js');
const primes = require('./primes.js');
const countries = require('./countries.js');
console.log(add(5, 6));
let result = 0;
for (const item of primes) {
    result += item;
}
console.log(result);
for (const item of countries) {
    console.log(`Country's name: ${item}, characters: ${item.length}`);
}