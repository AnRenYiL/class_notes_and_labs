function filter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // let value = fn(arr[i], i, arr);
        let value = fn(arr[i]);
        // let value = above(3)(arr[i]);
        if (value) {
            result.push(arr[i]);
        }
    }
    return result;
}

// const above = (min) => (n) => n > min;
const above = function (min) {
    return function (n) {
        return n > min;
    }
}

// Calling
let arr = [1, 2, 3, 4, 5, 6];
console.log(filter(arr, above(3)));







// console.log(filter(arr, even));
// console.log(filter(arr, odd));
// console.log(filter(arr, repeatedValue));

const even = (val) => val % 2 === 0;
const odd = (val) => !even(val);
const repeatedValue = (value, index, arr) => index !== arr.indexOf(value);