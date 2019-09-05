function merge(objectA, objectB) {
    const result = {};
    for (const key in objectA) {
        result[key] = objectA[key];
    }
    for (const key in objectB) {
        result[key] = objectB[key];
    }
    return result;
}
console.log(merge({
    a: 1,
    b: 2
}, {
    c: 3,
    d: 4
}));
console.log(merge({
    firstName: 'Ron',
    lastName: 'Wesley',
    occupation: 'Wizard'
}, {
    firstName: 'Harry',
    lastName: 'Potter'
}));