const fs = require('fs');
let result = [];
const arr = [
    '.gitignore',
    'app.js',
    'node_modules',
    'package-lock.json',
    'package.json',
    'views'
];

const getDirectory = new Promise((resolve, reject) => {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            reject(err);
        }
        if (files) {
            resolve(files)
        }
    })
});

// getDirectory
//     .then((files) => {
//         console.log(files)
//         // getData > data
//     })
//     .catch((err) => console.log(err));
// console.log(111);

// for (const item of arr) {
//     fs.readdir(__dirname, (files => {
//         result.push(files);
//     });
// }

function getFiles() {
    const result = [];
    for (const item of arr) {
        fs.readdir(__dirname, (files => {
            result.push(files);
        }));
    }
    console.log(result);
}

getFiles();