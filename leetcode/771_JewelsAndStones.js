function jewelsAndStones(j, s) {
    let result = 0;
    for (const item of s) {
        if (j.includes(item)) result++;
    }
    return result;
}
console.log(jewelsAndStones('aA', 'aAAbbbb'));