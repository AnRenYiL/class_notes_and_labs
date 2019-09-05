const express = require('express');
const logger = require('morgan');
const fs = require('fs');
//https://expressjs.com/en/4x/api.html
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');


// app.use: use this function to mount middleware
// __dirname is an alias for our project path
app.use(express.static(path.join(__dirname, 'public')));

// custom middleware to get username
function getUsernameMiddleware(request, response, next) {
    // response.locals is an object that allows us to set global variables
    // variables that are accessable within any template
    response.locals.userName = request.cookies.userName;
    next();
}

// cookie-parser middleware will look for cookies sent through the headers of
// a request and create a req.cookies object that houses the cookie data
app.use(cookieParser());

app.use(getUsernameMiddleware);

// this will parse x-www-urlencoded data to something that is easy to work with
// it will also add this data to req.body
app.use(express.urlencoded({
    extended: true
}));
//  -= MIDDLEWARE =-

// logger/morgan

// when using "morgan" middleware, call it with a string that describes
// the formatting of the logs.
// more can be found in the docs https://github.com/expressjs/morgan
app.use(logger('dev'));


app.use(function (req, res, next) {
    if (req.url.indexOf('/contact_us') > -1) {
        if (res.locals.userName) {
            next();
        } else {
            res.redirect('/');
        }
    }
    next();
})
// app.set allows us to change settings in our express app

app.set('view engine', 'ejs'); // here we are telling express to render tempaltes using ejs
//https://expressjs.com/en/4x/api.html

//#region 
// requiring the express project returns a function
// that is used to create an instance of express application

// the `app` object has methods to
// expess app documentation --> (https://expressjs.com/en/4x/api.html#app)
// route http requests
// configuring middleware
// render views
// register a view engine

// URL (Uniform Resource Locator)
// scheme:://host:port/path?query
// schema
// the protocal that is being used ex. http

// host and port
// is the location of the server hosting the webapp
// google.com or localhost

// path
// is a specific resource on the server
// for google something like "/search"

// query
// extra information about the resource we're trying to get

// a route is function that specifies a response to a combination of HTTP verb and path

// HTTP verbs
// GET - requesting a resource, should only respond with data
// POST - used to create a resource
// PATCH - used to update an existing resource
// PUT - used to completely replace an existing resource
// DELETE - used to remove a resource
// ect

// respond with "hello world" when somebody visits http://localhost:4000/hello_world

// App get is a method named after the HTTP verb. Used to define a GET Route
// There are methods on the app object that correspond to each HTTP verb

// get method takes the following paremeters in order:
// a path string
// a request handler (callback)
// the request callback has 2 arguments
// request and response
//#endregion
app.get("/", (request, response) => {
    //#region 
    //hello_world
    // the request object represents the request being made
    // it has information on whos trying to access the resource
    // what http verb is being used
    // query params

    // the response object contains a bunch of methods that allow a server to create
    // a reponse to the request

    // response.send will attatch the provided string to the body of html and send it back to the client
    // it also kills the connection
    // response.render('Welcome');
    //#endregion
    response.render('titleAndPicture', {
        title: '/'
    });
    // response.send('Hello, Mao');
});
app.get('/contact_us', (req, res) => {
    res.render('contactUs', {
        title: '/contact_us'
    });
});
app.get('/thank_you', (req, res) => {
    res.render('thankYou', {
        hello: 'aaa',
        name: req.query.name,
        favouriteColor: req.query.favouriteColor,
        message: req.query.message,
        favouriteDay: req.query.favouriteDay,
        title: '/thank_you'
    });
});
app.get('/car_status', (req, res) => {
    res.render('carStatus');
});
app.get('/show_year', (req, res) => {
    // console.log(req.query.year);
    res.render('showYear', {
        year: req.query.year
    });
});
app.get('/random_person', (req, res) => {
    // console.log(req.query.names);
    let result = '';
    if (req.query.names) {
        const arr = req.query.names.trim().split(',');
        result = arr[Math.floor(Math.random() * arr.length)];
    } else {
        result = 'please input the name';
    }
    res.render('randomPerson', {
        result: result
    });
});
app.get('/fizz_buzz', (req, res) => {
    let arr = '';
    if (req.query.fizz) {
        const fizz = req.query.fizz;
        const buzz = req.query.buzz;
        arr = [];
        for (i = 1; i <= 100; i++) {
            if (i % fizz == 0 && i % buzz == 0) {
                arr.push("fizzbuzz");
            } else if (i % fizz == 0) {
                arr.push("fizz");
            } else if (i % buzz == 0) {
                arr.push("buzz");
            } else arr.push(i);
        }
    }
    res.render('fizzBuzz', {
        array: arr
    });
});
app.get('/directory_lister', (req, res) => {
    let result = '';
    fs.readdir(__dirname, (err, files) => {
        result = files;
        res.render('directoryLister', {
            result: result
        });
    })
});

const maxAge = 1000 * 60 * 60 * 24 * 7;
app.post("/sign_in", (req, res) => {
    // res.render('signIn');
    // res.send(req.body);
    res.cookie("userName", req.body.userName, {
        maxAge: new Date(maxAge)
        // maxAge: maxAge
    });
    res.redirect('/');
});

app.post("/sign_out", (req, res) => {
    // res.render('signIn');
    // res.send(req.body);
    res.clearCookie("userName");
    res.redirect('/');
});

app.get("/language_selection_page", (request, response) => {
    response.render('languageSelectionPage');
});

app.post("/home_page", (req, res) => {
    res.cookie("userName", req.body.userName, {
        maxAge: new Date(maxAge)
    });
    res.cookie("language", req.body.language, {
        maxAge: new Date(maxAge)
    });
    res.redirect('/home_page');
});
app.get("/home_page", (req, res) => {
    console.log();
    res.render('homePage', {
        userName: req.cookies.userName,
        language: req.cookies.language
    });
});


app.get("/todo_list", (req, res) => {
    res.render('todoList', {
        name: req.cookies.name
    });
});

app.post("/todo_list", (req, res) => {
    if (req.cookies.name) {
        res.clearCookie("name");
        res.clearCookie("pwd");
    } else {
        res.cookie("name", req.body.name, {
            maxAge: new Date(maxAge)
        });
        res.cookie("pwd", req.body.pwd, {
            maxAge: new Date(maxAge)
        });
    }
    res.redirect('/todo_list');
});

app.post("/show_todo_list", (req, res) => {
    res.cookie("title", req.body.title, {
        maxAge: new Date(maxAge)
    });
    res.cookie("body", req.body.body, {
        maxAge: new Date(maxAge)
    });
    res.redirect('/show_todo_list');
});

app.get("/show_todo_list", (req, res) => {
    res.render('showTodoList', {
        title: req.cookies.title,
        body: req.cookies.body
    });
});



const PORT = 4545;
const ADDRESS = '127.0.0.1';

app.listen(PORT, ADDRESS, () => {
    console.log(`EXPRESS server listening on ${ADDRESS}:${PORT}`);
});