const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    if (req.url.indexOf('/contact_us') > -1) {
        if (res.locals.userName) {
            next();
        } else {
            res.redirect('/');
        }
    }
    next();
})

router.get("/", (request, response) => {
    response.render('titleAndPicture', {
        title: '/'
    });
});
router.get('/contact_us', (req, res) => {
    res.render('contactUs', {
        title: '/contact_us'
    });
});
router.get('/thank_you', (req, res) => {
    res.render('thankYou', {
        hello: 'aaa',
        name: req.query.name,
        favouriteColor: req.query.favouriteColor,
        message: req.query.message,
        favouriteDay: req.query.favouriteDay,
        title: '/thank_you'
    });
});
router.get('/car_status', (req, res) => {
    res.render('carStatus');
});
router.get('/show_year', (req, res) => {
    // console.log(req.query.year);
    res.render('showYear', {
        year: req.query.year
    });
});
router.get('/random_person', (req, res) => {
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
router.get('/fizz_buzz', (req, res) => {
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
router.get('/directory_lister', (req, res) => {
    let result = '';
    fs.readdir(__dirname, (err, files) => {
        result = files;
        res.render('directoryLister', {
            result: result
        });
    })
});

const maxAge = 1000 * 60 * 60 * 24 * 7;
router.post("/sign_in", (req, res) => {
    // res.render('signIn');
    // res.send(req.body);
    res.cookie("userName", req.body.userName, {
        maxAge: new Date(maxAge)
        // maxAge: maxAge
    });
    res.redirect('/');
});

router.post("/sign_out", (req, res) => {
    // res.render('signIn');
    // res.send(req.body);
    res.clearCookie("userName");
    res.redirect('/');
});

router.get("/language_selection_page", (request, response) => {
    response.render('languageSelectionPage');
});

router.post("/home_page", (req, res) => {
    res.cookie("userName", req.body.userName, {
        maxAge: new Date(maxAge)
    });
    res.cookie("language", req.body.language, {
        maxAge: new Date(maxAge)
    });
    res.redirect('/home_page');
});
router.get("/home_page", (req, res) => {
    console.log();
    res.render('homePage', {
        userName: req.cookies.userName,
        language: req.cookies.language
    });
});


router.get("/todo_list", (req, res) => {
    res.render('todoList', {
        name: req.cookies.name
    });
});

router.post("/todo_list", (req, res) => {
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

router.post("/show_todo_list", (req, res) => {
    res.cookie("title", req.body.title, {
        maxAge: new Date(maxAge)
    });
    res.cookie("body", req.body.body, {
        maxAge: new Date(maxAge)
    });
    res.redirect('/show_todo_list');
});

router.get("/show_todo_list", (req, res) => {
    res.render('showTodoList', {
        title: req.cookies.title,
        body: req.cookies.body
    });
});

module.exports = router;