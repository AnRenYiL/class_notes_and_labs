// let arr = [1, 2, 3, 4, 5];
// arr.forEach(element => console.log(element + 1));
// console.log(arr.map((n) => n + 1));
// console.log(arr.sort((a, b) => b - a));
// console.log(arr.sort(function (a, b) {
//     return b - a;
// }));


const loud = (logFn, fn) => {
    logFn(`Calling ${fn.name}`);
    let x = fn(2);
    logFn(`Calling ${fn.name} Value ${x}`);
    return x;
}
console.log(loud(log, add));

function add(n) {
    return n + 1;
}

function log(x) {
    console.info(x);
}