function mergeSet(array1, array2) {
    //return array1.concat(array2).unique();
    arrayReturn= array1.concat(array2);
    for (let i = 0; i < arrayReturn.length ; i++) {
        for (let j = i+1 ; j < arrayReturn.length ; j++) {
            if (arrayReturn[i] === arrayReturn[j]) {
                arrayReturn.splice(j,1);
            }
        }
        
    }
    return arrayReturn;
}
console.log(mergeSet([1, 3, 2],[3, 4, 5]));