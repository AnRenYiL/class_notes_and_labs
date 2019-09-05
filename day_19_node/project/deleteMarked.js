const csvname = process.argv[2];
const resultName = process.argv[3];
const csv = require('csv-parse');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const fs = require('fs');
let arr = [];
let titles;
fs.createReadStream(csvname)
    .pipe(csv())
    .on('data', (row) => {
        if (row[0] === 'name') {
            titles = row;
        } else {
            if (row[2] !== 'yes') {
                arr.push(row);
            }
        }
    })
    .on('end', () => {
        console.log(titles);
        const csvWriter = createCsvWriter({
            header: titles,
            path: resultName
        });
        csvWriter
            .writeRecords(arr)
            .then(() => console.log('The CSV file was written successfully'));
    });