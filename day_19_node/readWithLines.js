const fs = require('fs');
fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.log('Error reading file');
    } else {
        // console.log(data.toString());
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i++) {
            console.log(`${i+1} | ${lines[i]}`);
        }
    }
});