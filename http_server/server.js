const http = require('http');
const url = require('url');

// When creating a server we pass a callback that will be called when
// a client makes a request to the server.
// clients to an http server are usually browsers (chrome, firefox, ect)

// for lab 4
function checkScore(grade) {
  if (grade > 100 || grade < 0) {
    return "Invalid grade";
  } else {
    if (grade > 85) {
      return "A";
    } else if (grade > 72) {
      return "B";
    } else if (grade > 66) {
      return "C+";
    } else if (grade > 59) {
      return "C";
    } else if (grade > 49) {
      return "C-";
    } else {
      return "F";
    }
  }
}

const server = http.createServer((request, response) => {
  const queryParams = url.parse(request.url, true).query;
  // lab 3
  // const display = queryParams.temp ? ((queryParams.temp - 32) * 5 / 9) : 'Temperature is not found';

  // lab 4
  const display = queryParams.score ? checkScore(queryParams.score) : 'Score is not found';

  // request is an object that represents the request to the server
  // response is an object that represents the response from the server
  response.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>${display}</h1>
  </body>
  </html>
  `);
  response.end();
});

const PORT = 8080;
const ADDRESS = '127.0.0.1';
server.listen(PORT, ADDRESS, () => {
  console.log(`http server listening on ${ADDRESS}:${PORT}`);
})