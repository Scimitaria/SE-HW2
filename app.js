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
    res.render('home', function (err,html) {
        if (err) console.error(err);
        res.send(html);
    });
});

app.get('/addRecipe', (req, res) => { 
    res.render('addRecipe', function (err,html) {
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
    //make next RecipeID
    const mr = db.query('SELECT MAX(RecipeID) AS maxID FROM recipes');
    const id = (mr.rows ? mr.rows[0].max_value : mr[0].max_value) + 1;

	let sql = 
        `INSERT INTO recipes(title, id)
        VALUES (?, ${id})`;
	console.log(req.body);
    db.query(sql,[req.body.title, req.body.ingredients], (err, result) => {
        if(err) throw err;
        res.redirect('../db');
    });
});

