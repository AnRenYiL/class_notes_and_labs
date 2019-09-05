const grade=parseInt(process.argv[2]);
if(grade>100||grade<0)
{
    console.log("Invalid grade");
}
else
{
    if(grade>85)
    {
        console.log("A");
    }
    else if(grade>72)
    {
        console.log("B");
    }
    else if(grade>66)
    {
        console.log("C+");
    }
    else if(grade>59)
    {
        console.log("C");
    }
    else if(grade>49)
    {
        console.log("C-");
    }
    else
    {
        console.log("F");
    }
}