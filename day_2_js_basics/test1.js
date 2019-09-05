function occurencesOf(char,str)
{
    return (str.split(char)).length-1;
}
console.log(occurencesOf('l','hello world'));
