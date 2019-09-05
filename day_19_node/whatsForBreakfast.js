const readline = require('readline');
// this interface will take input from `stdin` which is what the user types in
// the terminal, and it will display output to `stdout` which will display the 
// output to terminal.
const ineterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ineterface.question('what do you want for breakfast?', (answer) => {
    console.log(answer);
    process.exit();
})