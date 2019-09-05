const word=process.argv.slice(2);//wrong
console.log(word);
let returnString='';
for(i=0;i<word.length;i++)
{
    i % 2 == 1 ? returnString+=word[i].toUpperCase():returnString+=word[i];
}
console.log(returnString);

