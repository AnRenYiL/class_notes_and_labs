const array=process.argv;
let number=0;
if(array[2]>array[3])
{
    if(array[2]>array[4])
    {
        number=array[2];
    }
    else    number=array[4];
}
else
{
    if(array[3]>array[4])
    {
        number=array[3];
    }
    else    number=array[4];
}
console.log(`The largest number is ${number}`);