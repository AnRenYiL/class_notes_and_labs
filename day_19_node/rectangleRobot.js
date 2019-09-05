let width, height, filename;
const readline = require('readline');
const ineterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
ineterface.question('What is the width?  ', (answer) => {
    width = answer;
    ineterface.question('What is the height?  ', (answer) => {
        height = answer;
        ineterface.question('What is the file name?  ', (answer) => {
            filename = answer;
            const fs = require("fs");
            let myText = '';
            for (let i = 0; i < height; i++) {
                myText += '*'.repeat(width) + '\n';
            }
            fs.writeFile(filename, myText, (err) => {
                if (err) {
                    console.log('ERROR HAPPENED');
                } else {
                    console.log(`${filename} is created!`);
                }
                process.exit();
            });
        });
    });
});