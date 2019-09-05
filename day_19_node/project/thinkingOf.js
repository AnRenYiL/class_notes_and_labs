console.log("I'm thinking of a number between 1 and 10");
const readline = require('readline');
const ineterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
let times = 0;
const number = '5';
ineterface.prompt();
ineterface.on('line', (line) => {
    times++;
    switch (line.trim()) {
        case number:
            console.log(`Guessed ${number} correctly in ${times} attempts!`);
            process.exit();
            break;
        default:
            console.log("Nope. Try again.");
            break;
    }
    ineterface.prompt();
});

//cd Documents/class_notes/day_19_node/project/
//node thinkingOf.js