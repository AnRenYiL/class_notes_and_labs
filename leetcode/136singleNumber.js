/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
    const obj = {};
    for (const item of nums) {
        obj[item] ? obj[item] += 1 : obj[item] = 1;
    }
    let result = [];
    for (const item in obj) {
        if (obj[item] == 1) {
            result.push(item);
        }
    }
    return result;
};
console.log(singleNumber([4, 1, 2, 1, 2]));