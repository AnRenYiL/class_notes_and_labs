function flatten(arr, result = []) {
    arr.forEach(element => {
        if (Array.isArray(element))
            flatten(element, result);
        else
            result.push(element);
    });
    return result;
}

console.log(flatten([1, 2, [3, [4, 5]]]));
console.log(flatten(['a', ['b', ['c']]]));
console.log(flatten([
    [2, 3],
    [8, [5, 9],
        [4, 5]
    ], 10
]));

function flatten(orignalArray) {
    let result = [];
    let recursionFunction = function (recursionArray) {
        for (let i = 0; i < recursionArray.length; i++) {
            if (Array.isArray(recursionArray[i]))
                recursionFunction(recursionArray[i]);
            else
                result.push(recursionArray[i]);
        }
    };
    recursionFunction(orignalArray);
    return result;
}