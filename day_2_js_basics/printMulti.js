//let count = 0;
function printMulti(arr)
{
    for (const x of arr) {
        if (Array.isArray(x)) {
            printMulti(x);
        }
        else {
            //count++;
            console.log(x);
        }
    }
}
console.log(printMulti([[2,3,4], ["Hello CodeCore",1, true]]));