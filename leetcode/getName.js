function getFileName(str) {
    let a = str.split('.')[1].split(' ').join('').replace(/\d+/, '');
    let s = str.split('.')[0] + a.substring(0, 1).toLowerCase() + a.substring(1) + '.js';
    return s;
}
// console.log(getFileName('136. Single Number'));
console.log(getFileName('344. Reverse String'));