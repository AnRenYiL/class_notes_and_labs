// 0.25a + 4f + 0.5b = 20
// a + b + c = 20
for (let i = 1; i < 19; i++) {
    for (let j = 1; j < 5; j++) {
        for (let k = 1; k < 19; k++) {
            if ((0.25 * i + 4 * j + 0.5 * k == 20) && ((i + j + k) == 20)) {
                console.log(`0.25 * ${i} + 4 * ${j} + 0.5 * ${k}`);
            }
        }
    }
}