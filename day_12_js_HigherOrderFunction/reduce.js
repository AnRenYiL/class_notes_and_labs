function reduce(arr, fn, x) {
    let lastVal = fn(x, arr[0]);
    for (let i = 1; i < arr.length; i++) {
        lastVal = fn(lastVal, arr[i]);
    }
    return lastVal;
}

const plus = (lastResult, currentVal) => {
    return lastResult + currentVal;
}
const time = (lastResult, currentVal) => {
    return lastResult * currentVal;
}
const numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, plus, 0));
console.log(reduce(numbers, time, 1));