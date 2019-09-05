function largestNumber(arr) {
    let largest=0;
    for (const item of arr) {
        if (largest<item) largest=item;
    }
    return largest;
}
console.log(largestNumber([40, 2, 13, 34, 42]) );
console.log(largestNumber([1, 2, 3, 4, 5, 6]));
console.log(largestNumber([99, 77, 55, 33, 22, 11]) );