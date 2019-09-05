const colour = process.argv[2];
const width = process.argv[3];
const height = process.argv[4];
const chalk = require('chalk');
const log = console.log;
let repeatStr = '';
let result = '';
for (let i = 0; i <= width; i++) {
    i % 2 == 0 ? repeatStr += ' ' : repeatStr += chalk.bgKeyword(colour)(' ');
}
for (let i = 0; i < height; i++) {
    i % 2 == 0 ? repeatStr.substring(0, repeatStr.length - 1) + '\n' : repeatStr.substring(1, result.length) + '\n';
}
log(result);