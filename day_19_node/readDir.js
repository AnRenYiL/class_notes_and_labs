const fs = require("fs");
fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for (const item of files) {
            console.log(item);
        }
    }

});