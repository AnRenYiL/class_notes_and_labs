const fs = require("fs");
const width = process.argv[2];
const height = process.argv[3];
let myText = '';
for (let i = 0; i < height; i++) {
    myText += '*'.repeat(width) + '\n\n';
}
fs.writeFile(`${width}_by_${height}`, myText.substring(0, myText.length - 1), (err) => {
    if (err) {
        console.log('ERROR HAPPENED');
    } else {
        console.log('Done!');
    }
});