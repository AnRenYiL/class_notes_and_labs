function isEven(num) {
    if ( typeof(num) === "number") {
        return num & 1 ? false : true;
    } else {
        return "It's not a number!";
    }
}
console.log(isEven(8));
console.log(isEven(5));
console.log(isEven(9));