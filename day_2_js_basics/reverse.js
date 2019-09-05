function reverse(word)
{
    let returnStr="";
    for (let index = word.length - 1 ; index >= 0 ; index--) {
        returnStr += word[index];        
    }
    return returnStr;
}
console.log(reverse("hello"));
console.log(reverse("dog"));
console.log(reverse("codecore"));