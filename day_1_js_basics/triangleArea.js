const a=parseInt(process.argv[2]);
const b=parseInt(process.argv[3]);
const c=parseInt(process.argv[4]);
//check if it's a triangle
if((a+b)>c&&(a+c)>b&&(b+c)>a)
{
    console.log(`Perimeter: ${a+b+c}`);
    let p=(a+b+c)/2;
    console.log(`Area: ${Math.sqrt(p*(p-a)*(p-b)*(p-c))}`);
}
else
{
    console.log("Impossible triangle!");
}
