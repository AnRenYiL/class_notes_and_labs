/**
 * @param {number[][]} A
 * @return {number[][]}
 */
function transpose(A) {
    let result = [];
    for (let i = 0; i < A[0].length; i++) {
        let arr = [];
        for (let j = 0; j < A.length; j++) {
            arr.push(A[j][i]);
        }
        result.push(arr);
    }
    return result;
};
console.log(transpose([
    [1, 2, 3],
    [4, 5, 6]
]));
console.log(transpose(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
));