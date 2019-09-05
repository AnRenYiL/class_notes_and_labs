const doggo = {
    name: "Gabe",
    age: 10,
    //A method is just a property within in object whos values is a function
    bark: function () {
        console.log("bark!");
    },
    sleep: function () {
        console.log("zzzz");
    },
    sleepa: sleep,
    sleepb() {
        console.log("ZzzzzB");
    },
    speak() {
        console.log(this);
    }
};

function sleep() {
    console.log("zzzzzzzzA");
}
//we can call methods by referencing the obj's property and appending parenthesis
//() just like a function call.
doggo.bark();
doggo.sleep();
doggo.sleepa();
doggo.sleepb();
doggo.speak();