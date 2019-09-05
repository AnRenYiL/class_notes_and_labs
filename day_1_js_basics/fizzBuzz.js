const fizz=parseInt(process.argv[2]);
const buzz=parseInt(process.argv[3]);
for(i=1;i<=100;i++)
{
    if(i%fizz==0&&i%buzz==0)
    {
        console.log("fizzbuzz");
    }
    else if(i%fizz==0)
    {
        console.log("fizz");
    }
    else if(i%buzz==0)
    {
        console.log("buzz");
    }
    else    console.log(i);
}