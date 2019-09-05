function maximumRecursion(arr, val) {
    if (arr.length == 0) {
        return val;
    } else {
        if (val < arr[0]) val = arr[0];
        arr = arr.slice(1);
        return maximumRecursion(arr, val);
    }
}

function maximumIteration(arr) {
    let max = -1;
    for (const item of arr) {
        if (item > max) max = item;
    }
    return max;
}

console.time("recursion>>>>>>>");
console.log(maximumRecursion([213, 12, 66, 999], -1));
console.timeEnd("recursion>>>>>>>");
console.time("recursion>>>>>>>");
console.log(maximumRecursion([1, 2, 3, 11, 3, 6, 5], -1));
console.timeEnd("recursion>>>>>>>");
console.time("recursion>>>>>>>");
console.log(maximumRecursion([213, 12, 66, 999], -1));
console.timeEnd("recursion>>>>>>>");
console.time("iteration>>>>>>>");
console.log(maximumIteration([1, 2, 3, 11, 3, 6, 5]));
console.timeEnd("iteration>>>>>>>");