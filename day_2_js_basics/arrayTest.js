function sum(arr)
{
    let total=0;
    for (const item of arr) {
        if(typeof(item)=="number")
        {
            total+=item;
        }
    }
    return total;
}
//console.log(sum([1,2,3,4,5,6]));

//console.log(sum([2,2,"A",2]));
function product(arr)
{
    let total=1;
    for (const item of arr) {
        if(typeof(item)=="number")
        {
            total = total * item;
        }
    }
    return total;
}
//console.log(product([-1,2,3]));
//console.log(product([2,2,"A",2]));
//console.log(product([2,1000,0]));

function allOccurencesOf(char,arr)
{
    let returnArr=[];
    for (const item of arr) {
        let count=(item.split(char)).length-1;
        if(count>0)
        {
            returnArr.push(count);
        }
        else returnArr.push(0);
    }
    return returnArr;
}
console.log(allOccurencesOf("l",["hello","world"]));
console.log(allOccurencesOf("o",["bob","likes","tea"]));