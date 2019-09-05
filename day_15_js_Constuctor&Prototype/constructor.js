//defining a contructor function
//by canvention constructor function names are capitalized
//it's called PascalCase
function Doggo(name, age) {
    //when calling this constructor function with the new keyword 
    //this becomes an empty obj. We can add properties to this 
    //obj  by using dot natation or square bracket notation
    //this = {};
    this.name = name;
    this.age = age;
    this.sleep = () => {
        console.log('Zzzzz');
    };
}
//Add the bark method to the prototype of Doggo
//All instances of the Doggo constructor now have a reference
// to this bark method through the the prototype chain
Doggo.prototype.bark = function () {
    console.log('bark!');
}
const jeff = new Doggo('Jeff', 9);
const stella = new Doggo('Stella', 21);
console.log(jeff);
console.log(stella);
jeff.bark();
jeff.sleep();