// PROMISES

// To create a promise, use the `Promise` constructor.
// It requires a callback as an argument which is called with
// a `resolve` function and a `reject` function as its arguments.
// This callback is usually named the executor or the resolver.
//            👇This CALLBACK is an executor / resolver
new Promise((resolve, reject) => {
    if (false /* SOMETHING GOES WRONG*/ ) {
        // Call `reject` when something goes wrong or when an error occurs.
        // JavaScript will see this as an error.
        reject('Danger !Danger')
    }
    // Call `resolve` when the promise is complete. The argument passed to resolve
    // will be the value that the Promise "returns". We call this the Promise Value.
    resolve('it worked')
})

function flipCoin() {
    return new Promise((resolve, reject) => {
        const coinFace = ['Heads', 'Tails'][Math.floor(Math.random() * 2)];
        resolve(coinFace);
    })
}

function random(n) {
    return Math.floor(Math.random() * n);
}

function throwCoin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Heads', 'Tails'][random(2)])
        }, 1000 + random(4000));
        setTimeout(() => {
            reject('Lost coin! Throw again.')
        }, 3000)
    })
}

function throwDie(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(random(num) + 1)
        }, 1000 + random(4000));
    })
}

// Promise objects have a .then method. Call it
// with a callback which will be passed the
// promise's value once it is resolved
function usingPromiseDemo() {
    throwCoin()
        .then(promiseValue => console.log(promiseValue))
        .catch((error) => {
            console.error(error)
        });
}


function flipCoin() {
    const face = throwCoin();

    // You can use .then multiples on the same promise
    // and it will always get you the same value.

    // Each of the then-callbacks resolve once the
    // promise resolve.

    face.then(value => console.log(value));
    face.then(value => console.log(value));
    face.then(value => console.log(value));
    face.then(value => console.log(value));

}

function chainingThenDemo() {
    const returnOfThen = throwCoin().then(value => {
        console.log(`#1 ${value}`);
        return 'Hello!'
    });
    return returnOfThen;
}

function moreChainingDemo() {
    throwCoin()
        .then(value => {
            console.log((1, value));
            return 'Hello!';

        })
        .then(value => {
            console.log(2, value);
            return throwCoin()
        })
        .then(value => {
            console.log(3, value);
        });
}

function delay(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Resolved')
        }, time)
    })
}


function delayWithValue(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('time:', time, 'value:', value);
            resolve(value);
        }, time)
    });
}

// Promise.resolve(10)
// // same as doing:
// new Promise((resolve,reject)= resolve(10))
// Promise.reject('Oops! A rejection')
// // same as doing:
// new Promise((resolve,reject)=reject('Oops!'))
// DEMO: Sequential vs Parallel
// Promise.all

function sequentialDemo() {
    console.time('SequentialDemo');
    return delayWithValue(1000 + random(1000), 10)
        .then(() => delayWithValue(1000 + random(1000), 20))
        .then(() => delayWithValue(1000 + random(1000), 30))
        .then(() => delayWithValue(1000 + random(1000), 40))
        .then(() => delayWithValue(1000 + random(1000), 50))
        .then(() => console.timeEnd('SequentialDemo'))
}

function parallelDemo() {
    console.time('parallelDemo');
    return Promise.all([
        delayWithValue(1000 + random(1000), 10),
        delayWithValue(1000 + random(1000), 20),
        delayWithValue(1000 + random(1000), 30),
        delayWithValue(1000 + random(1000), 40),
        delayWithValue(1000 + random(1000), 50),
    ]).then(resolvedValue => {
        console.timeEnd('parallelDemo')
        console.log('Promise.all resolved value', resolvedValue);
    })
}

function raceHorses() {
    console.log('🐴🐴🐴🐴🐴🐴🐴');
    return Promise.race([
        delayWithValue(1000 + random(3000), 'Twinkle Star'),
        delayWithValue(1000 + random(3000), 'Rocket Hooves'),
        delayWithValue(1000 + random(3000), 'Bojack'),
        delayWithValue(1000 + random(3000), 'Secretariat'),
        delayWithValue(1000 + random(3000), 'Minrou')
    ]).then(resolvedValue => {
        console.log(`${resolvedValue} Won !!! 🏁`);
    })
}

async function asyncCall() {
    console.log('Calling');
    let result = await delay(2000);
    console.log(result);
}