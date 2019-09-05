const express = require('express');
const router = express.Router();
const knex = require('../db/client');



router.get('/new', (req, res) => {
    res.render('articles/new', {
        article: null
    });
});

router.get("/:id", (req, res) => {
    // if we go to localhost:4535/articles/6007
    knex("articles")
        .select("*")
        .where({
            id: req.params.id
        })
        .then((data) => {
            res.render('articles/show', {
                article: data[0]
            });
        });
});

router.get('/', (req, res) => {
    knex("articles")
        .select("*")
        .then((data) => {
            res.render("articles/index", {
                articles: data,
            });
        });
});

router.post('/', (req, res) => {
    const articlesParams = {
        title: req.body.title,
        content: req.body.content,
        username: res.locals.userName,
        viewCount: 0
    };
    knex("articles")
        .insert(articlesParams)
        .returning('*')
        .then((data) => {
            res.send(data);
        });
});

router.delete("/:id", (req, res) => {
    knex("articles")
        .where({
            id: req.params.id
        })
        .delete()
        .then((data) => {
            res.redirect("/articles")
        });
});

router.get("/:id/edit", (req, res) => {
    knex("articles")
        .select("*")
        .where({
            id: req.params.id
        })
        .then((data) => {
            res.render('articles/edit', {
                article: data[0]
            });
        });
});
router.patch("/:id", (req, res) => {
    const articleParams = {
        title: req.body.title,
        content: req.body.content
    };
    knex("articles")
        .where({
            id: req.params.id
        })
        .update(articleParams)
        .returning('id')
        .then((data) => {
            res.redirect(`/articles/${data[0]}`);
        });
});


module.exports = router;