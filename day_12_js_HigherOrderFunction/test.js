function add(a, b) {
    return a + b;
}

function fnReturner() {
    return add;
}
const adder = fnReturner();
console.log(adder(1, 3));

function sayHi() {
    return "Hi";
}

function fnAccepter(f) {
    return f();
}

// console.log(fnAccepter(sayHi));

const bark = (type, sound) => {
    return `${type} barks ${sound} !`;
}
console.log(bark('dog', 'wangwangwang'));