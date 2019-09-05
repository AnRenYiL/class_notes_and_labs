const express = require('express');
const logger = require('morgan');
const fs = require('fs');
//https://expressjs.com/en/4x/api.html
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const knex = require('./db/client');
const router = require('./routes/root');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method
        return method;
    }
}));

function getUsernameMiddleware(request, response, next) {
    response.locals.userName = request.cookies.userName;
    next();
}
app.use(cookieParser());

app.use(getUsernameMiddleware);
app.use(express.urlencoded({
    extended: true
}));
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(router);
app.use("/articles", articleRouter);




const PORT = 4545;
const ADDRESS = '127.0.0.1';

app.listen(PORT, ADDRESS, () => {
    console.log(`EXPRESS server listening on ${ADDRESS}:${PORT}`);
});