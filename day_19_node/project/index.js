const QRCode = require("qrcode");

QRCode.toFile('hello.png', "Hello World", (err) => {
    if (err) {
        console.log('QR Code Did not generate correctly');
    } else {
        console.log('QR Code Generated to file hello.png');
    }
});