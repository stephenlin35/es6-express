import express from 'express';
import fs from 'fs';
import path from 'path';

let app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "../../dist"));
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.get('/bundle.js', (req, res) => {
    res.render('bundle');
});

let server = app.listen(8080, function() {
    console.log('Server running on port 8080');
});