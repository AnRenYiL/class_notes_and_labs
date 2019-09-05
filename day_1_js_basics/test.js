const password=process.argv[2];
if(!password)
{
    console.log("Password argument is required");
}
else if(password=="opensame")  
{
    console.log("714");
}
else    console.log("Failure");
// let number=0;
// while(number<=100)
// {
//     console.log(number);
//     number++;
// }
// for(i=100;i>=1;i--)
// {
//     console.log(i+" bottles of beer on the wall, "+i+" bottles of beer.");
//     console.log("Take one down, pass it around, "+Number(i-1)+" bottles of beer on the wall.");    
// }