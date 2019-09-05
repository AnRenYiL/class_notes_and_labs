/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
    let result = [];
    A[0].split('').forEach(element => {
        let check = 0;
        for (let j = 1; j < A.length; j++) {
            if (A[j].indexOf(element) > -1) {
                let a = A[j];
                a = a.replace(element, '*');
                A[j] = a;
                check++;
            } else break;
        }
        if (check == A.length - 1) {
            result.push(element);
        }
    });
    return result;
};
// console.log(commonChars(["cool", "lock", "cook"]));
console.log(commonChars(["bbddabab", "cbcddbdd", "bbcadcab", "dabcacad", "cddcacbc", "ccbdbcba", "cbddaccc", "accdcdbb"]));