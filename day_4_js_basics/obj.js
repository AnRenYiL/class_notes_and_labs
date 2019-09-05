function countChars(str) {
    const obj = {};
    for (const item of str.toLowerCase().split('')) {
        obj[item] ? obj[item] += 1 : obj[item] = 1;
        // if (obj[item]) {
        //     obj[item] += 1;
        // } else {
        //     obj[item] = 1;
        // }
    }
    return obj;
}
//console.log(countChars("An archer"));

function toArray(obj) {
    let arr = [];
    for (const key in obj) {
        arr.push([key, obj[key]]);
    }
    return arr;
}
//console.log(toArray({a:1,b:2,c:3}));

const ArrayUtils = {
    first(arr) {

    },
    last: function () {

    }
}

const ArrayExtras = {
    toObject(arr) {
        const obj = {};
        for (const item of arr) {
            obj[item[0]] = item[1];
        }
        return obj
    }
}
// console.log(ArrayExtras.toObject([['a',1],['b',2],['c',3]]));


const counter = {
    step: 1,
    count: 1,
    inc() {
        this.count += this.step;
        return this;
    },
    dec() {
        this.count -= this.step;
        return this;
    },
    set(n) {
        this.count = n;
    },
    now() {
        return this.count;
    },
    setStep(n) {
        this.step = n;
    },
    getStep() {
        return this.step;
    }
}


// counter.set(10);
// console.log(counter.now());
// counter.setStep(2);
// counter.inc();
// console.log(counter.now());
// counter.setStep(5);
// counter.dec();
// console.log(counter.now());
console.log(counter.dec().inc().inc().inc().now());