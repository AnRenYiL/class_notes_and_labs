const filename = process.argv[2];
const number = process.argv[3];
const jimp = require('jimp');
async function main() {
    const image = await jimp.read(filename);
    image.blur(parseInt(number), (err, jp) => {
        if (err) {
            console.log(err);
        } else {
            jp.write(filename);
        }
    });
}
main();