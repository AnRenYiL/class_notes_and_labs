// function add(a, b) {
//     return a + b;
// }
const add = (a, b) => a + b;

// function flip(fn) {
//     return function (a, b) {
//         return fn(b, a);
//     }
// }
const flip = (fn) => (a, b) => fn(b, a);

// function V(x) {
//     return function (y) {
//         return function (z) {
//             return z(x)(y);
//         };
//     };
// }
const V = (x) => (y) => (z) => z(x)(y);