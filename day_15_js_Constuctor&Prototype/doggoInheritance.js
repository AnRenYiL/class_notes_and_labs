class Doggo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //sleep method 
        //bark method
    }
    bark() {
        console.log('Bark!');
    }
    sleep() {
        console.log('Zzzzz!');
    }
}

class DoggoFighter extends Doggo {
    constructor(name, age, specialPower) {
        // this.name = name;
        // this.age = age;
        //super calls the constructor in the parent class
        //
        super(name, age);
        this.specialPower = specialPower;
    }
    useSpecial() {
        console.log(`${this.name} used ${this.specialPower}! It was very effective!`);
    }
}
// Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);
//now any instance of DoggoFighter has all the attributes and methods
//of a Doggo instace
const normie = new Doggo('normie', 1);
const darrel = new DoggoFighter('Darrel', 50, 'Drill');