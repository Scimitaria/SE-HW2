const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.set('view engine','ejs');
const port = 9001;
app.use(express.static(path.join(__dirname, 'public')));
 
var connection = require('./database');

app.listen(port, function () {
  console.log(`Recipe app listening on port ${port}!`);
});

app.get('/', (req, res) => { 
    res.render('home', { name: 'Dr. Horn' }, function (err,html) {
        if (err) console.error(err);
        res.send(html);
    }); 
});

app.get('/recipeList', (req, res) => {
    let sql = 'SELECT * FROM recipes';
 
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.render('recipe', {recipes: result}, function (err,html) {
            if (err) console.error(err);
            res.send(html);
        });
    });
});

router.post("/add_recipe", function (req, res) {
	let sql = 
        `INSERT INTO recipes(title, id)
        VALUES (?, ?)`;
	console.log(req.body);
    db.query(sql,[req.body.title, req.body.ingredients], (err, result) => {
        if(err) throw err;
        res.redirect('../db');
    });
});

