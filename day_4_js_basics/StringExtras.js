const StringExtras = {
    repeat(n, times) {
        let result = '';
        while (times > 0) {
            result += n;
            times--;
        }
        return result;
    },
    leftPad(word, n) {
        if (word.length >= n) {
            return word;
        } else {
            let result = word;
            let times = n - word.length;
            while (times > 0) {
                result = '#' + result;
                times--;
            }
            return result;
        }
    },
    rightPad(word, n) {
        if (word.length >= n) {
            return word;
        } else {
            let result = word;
            let times = n - word.length;
            while (times > 0) {
                result += '#';
                times--;
            }
            return result;
        }
    },
    pad(word, n) {
        if (word.length >= n) {
            return word;
        } else {
            let result = word;
            let times = n - word.length;
            while (times > 0) {
                result = '#' + result + '#';
                times--;
            }
            return result;
        }
    },
    capitalize(word) {
        let a = '';
        return word[0].toUpperCase() + word.slice(1, word.length);
    }
}

let a = 'you';
console.log(StringExtras.repeat(a, 3));
console.log(StringExtras.repeat(' ', 6));
console.log(StringExtras.leftPad(a, 5));
console.log(StringExtras.leftPad(a, 1));
console.log(StringExtras.leftPad(a, 3));
console.log(StringExtras.leftPad(a, 4));
console.log(StringExtras.rightPad(a, 6) + 'me');
console.log(StringExtras.pad(a, 5));
console.log(StringExtras.pad(a, 6));
console.log(StringExtras.pad(a, 10));
console.log(StringExtras.capitalize(a));