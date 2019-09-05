function duplicate(data) {
    let result = [];
    data.forEach(function (element, index) {
        if (data.indexOf(element, index + 1) > -1) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
        // if (result.indexOf(element) === -1) {
        //     result.push(element);
        // }
    });
    return result;
}
console.log(duplicate([1, 4, 5, 1, 5, 6, 7, 8, 4, 3, 3, 1, 3]));

// console.log([1, 4, 5, 1, 5, 6, 7, 8, 4, 3, 3, 1, 3].indexOf(1));
// i dont understand   if(data.indexOf(element, index+1)>-1)
// if(result.indexOf(element)=== -1) this means if result.indexOf(element) has no same value, it result.push to element
// but what does this if(data.indexOf(element, index+1)>-1) mean?