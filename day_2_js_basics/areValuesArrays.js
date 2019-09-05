function areValuesArrays(array)
{
    for (const item of array) {
        if(!Array.isArray(item))
        {
           return false;
        }
    }
    return true;
}
console.log(areValuesArrays([[1], [2], [4, 5]]));
console.log(areValuesArrays([1, [2], [6, 7, 8]]) );
console.log(areValuesArrays([[1], 2, [6, 7, 8]]));
console.log(areValuesArrays(['true', 'false']));