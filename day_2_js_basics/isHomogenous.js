function isHomogenous(arr) {
    let type=typeof(arr[0]);
    if(type==="object")
    {
        Array.isArray(arr[0]) ? type="array" : type="object" ;
    }
    for (const item of arr) {
        if (typeof(item) !== type) 
        {
            if (type == "array" && Array.isArray(item)) 
            {
                continue;
            }
            else return false;
        }
    }
    return true;
}
console.log(isHomogenous([1, 2, 3]));
console.log(isHomogenous(['a', 'b', 'c']));
console.log(isHomogenous([[2], 'Xavier']) );
console.log(isHomogenous([[2], {colour: 'blue'}]) );
console.log(isHomogenous([1, '2', 3]) );