// the 'net' module is part of node. it allows us to create TCP servers
const net = require('net');
const server = net.createServer((socket) => {
    //This callback will be called when ever a clinet makes a request to this server
    //it will be called once per connection
    //the first argument to this calback is 'socket' and it represents the connection.
    //its the 'socket''s job to listen for requests
    //respond to requests, and close connections, and check errors
    console.log('~ Connection Oppened! ~');
    //socket.on is a method of the socket object
    //its called an event listener and it is used to listen for events and respond.

    //the first argument of socket.on is a string of the event we are listening for 
    //the second argument is a callback which does something when the event is triggered
    socket.on('data', (data) => {
        // console.log(`Hello ${data.toString()}`);
        if (data.toString() != 'undefined') {
            // lab 1
            // socket.write(`${data.toString().split('').reverse().join('')}`);

            // lab 2
            // const arr = data.toString().split(',');
            // socket.write(`${Math.max(...arr)}`);


        } else {
            socket.write(`nothing`);
        }

    });
});
const PORT = 5000;
const ADDRESS = '127.0.0.1';
server.listen(PORT, ADDRESS, () => {
    console.log(`http server listening on ${ADDRESS}:${PORT}`);
})