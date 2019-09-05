const arrayExtras = {
    //last method
    //returns the last element in an array
    last(array) {
        return array[array.length - 1];
    },
    //first method
    //returns the first element in an array
    first: function (array) {
        return array[0];
    },
    //take method
    //will return the element based of a argument
    take: take,
    toObject(array) {
        const result = {};
        for (const item of array) {
            result[item[0]] = item[1];
        }
        return result;
    }
}

function take(array, index) {
    return array[index];
}
console.log(arrayExtras.last([1, 2, 3, 4]));
console.log(arrayExtras.first([1, 2, 3, 4]));
console.log(arrayExtras.take([1, 2, 3, 4], 2));
console.log(arrayExtras.toObject([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]));