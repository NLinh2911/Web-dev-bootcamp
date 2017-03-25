const express = require('express');
const app = express();

// include public assets
app.use(express.static('public'));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/love/:thing', (req,res) => {
    let thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', (req, res) => {
    let posts = [
        {title: "post 1", author: "abc"},
        {title: "coffee is great", author: "cde"},
        {title: "check check check", author: "dddd"}
    ];

    res.render('posts', {posts: posts});
});

app.listen(3000, () => {
    console.log('Listen to 3000');
});