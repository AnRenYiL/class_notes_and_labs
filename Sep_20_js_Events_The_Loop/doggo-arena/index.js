// addEventListener is used to register events on a DOM Node
// It takes in 2 arguments
// 1) a string of the name of event
// 2) a callback function that gets fired when the event is triggered
// All DOM Nodes can have events registered to it using HTMLElement.addEventLister

// using addEventLister
// lets add an event to a doggo

const ToxicTim = document.querySelector('#toxic-tim');
ToxicTim.addEventListener('click', () => {
    console.log('this: ', this); // becareful using the `this` keyword with arrow functions because arrow functions automatically bind the value of `this`
    console.log('Toxic Tim was clicked!');
});

// adding a click event to the document Node
document.addEventListener('click', function (event) {
    console.log(event);
    console.log('target: ', event.target); // event.target is the DOM Node that triggered this event. It does not have to be the node that has the event
    console.log('currentTarget:', event.currentTarget); // event.currentTarget is the DOM Node that has the event listener attatched to it
    console.log('this', this); // the value of `this` within a event listener is event.currentTarget
    console.log('document was clicked!');
});

// when a user clicks a dogs name, it logs out "Doggo Name Clicked"
const doggoNames = document.querySelectorAll('.doggo.fighter > h1'); //grabs all the h1 tags which are children of a element with the classes doggo and fighter
doggoNames.forEach(dogName => {
    dogName.addEventListener('click', () => {
        console.log('Doggo Name Clicked');
    })
});

// Testing if a object is a DOM Node (HTML element)
document instanceof Node // true
    "strings"
instanceof Node // false
document.querySelectorAll('div') instanceof Node // false
document.querySelectorAll('div')[0] instanceof Node // true

// Listen to click events on Nina The Ninja
const ninaNinja = document.getElementById('nina-the-ninja');
ninaNinja.addEventListener('click', function (e) {
    console.log('target: ', e.target, ' currentTarget: ', e.currentTarget);
    console.log('mouse position X: ', e.clientX, ' mouse postion Y: ', e.clientY);
    console.log(this);
})

// EXERCISE: Move to back

const teamRoster = document.querySelectorAll('.roster');
teamRoster.forEach(roster => {
    roster.addEventListener('click', function (e) {
        const target = e.target; //assume this is a dog that gets clicked
        const roster = e.currentTarget; //we can use keyword `this`\
        const doggo = target.closest('.doggo');
        if (doggo.matches('.doggo')) { // only append to the childen of roster if the target is a doggo
            roster.appendChild(doggo);
        }
    });
});

// Form events

// input
const random = n => Math.ceil(Math.random() * n); // just a function that returns a number between 1 and n
const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll('input').forEach(node => {
    node.addEventListener('input', event => {
        console.log(event.currentTarget.value);
        // we can get an inputs value using `event.currentTarget.value`
        // keySound().play();
    })
});

document.querySelector('form').addEventListener('submit', function (event) {
    // to prevent a event from doing its default behaviour we can call `event.preventDefault()`
    document.querySelector(".doggo.blank").style.backgroundImage = "url(" + document.querySelector("#picture-url").value + ")";
    event.preventDefault();
});

const blankDoggo = document.querySelector('.doggo.blank');
const pictureUrlInput = document.getElementById('picture-url');

pictureUrlInput.addEventListener('change', event => {
    const url = event.currentTarget.value;
    blankDoggo.style.backgroundImage = `url(${url})`;
});

// when a user presses they keys CTRL ALT and X send us to "https:"

document.addEventListener('keydown', (event) => {
    const KEY_CODE_X = 88;
    // const keyCode = event.keyCode; // getter for a key's id
    // const altKey = event.altKey; // returns true if the alt key is being pressed at the same time
    // const ctrlKey = event.ctrlKey; // returns true if the ctrl key is being pressed at the same time
    // const shiftKey = event.shiftKey;
    const {
        keyCode,
        altKey,
        ctrlKey,
        shiftKey
    } = event;
    // console.log(event.key);
    if (keyCode === KEY_CODE_X && altKey && ctrlKey && shiftKey) {
        window.location.href = "http://hackertyper.net";
    }
});