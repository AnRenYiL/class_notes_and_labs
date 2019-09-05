const str = process.argv[2];
const net = require('net');

const socket = net.Socket();

socket.on("data", (data) => {
    console.log(`${data}`);
    socket.end();
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";

socket.connect(PORT, ADDRESS, () => {
    console.log(`Client Connected`);
    socket.write(`${str}`);
});