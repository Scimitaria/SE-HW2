const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.set('view engine','ejs');
const port = 9001;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));

const connection = require('./database');

app.listen(port, function () {
  console.log(`Recipe app listening on port ${port}!`);
});

app.get('/', (req, res) => { 
    res.render('home', function (err,html) {
        if (err) console.error(err);
        res.send(html);
    });
});

app.get('/recipe/:recipeID', (req,res) => {
    const recipeID = req.params.recipeID;
    const sql = `
        SELECT recipes.RecipeID, RecipeName, Ingredient, Description
        FROM recipes, ingredients
        WHERE recipes.RecipeID = ingredients.RecipeID
        AND recipes.RecipeID = ?;
    `;
    connection.query(sql, recipeID, (err, result) => {
        res.render('recipe', {ingredients: result}, function(err,html){
            if(err)console.error(err);
            res.send(html);
        });
    });
});

app.get('/addRecipe', (req, res) => {
    connection.query('SELECT DISTINCT Ingredient FROM ingredients;', (err,result) => {
        const ingredients = result;
        if(err) console.error(err);
        connection.query('SELECT DISTINCT Protein FROM recipes;', (err,result) => {
            if(err) console.error(err);
            res.render('addRecipe', {ingredients,proteins: result}, function (err,html) {
                if (err) console.error(err);
                res.send(html);
            });
        })
    });
});

app.get('/recipeList', (req, res) => {
    let sql = 'SELECT * FROM recipes';

    connection.query(sql, (err, result) => {
        if(err) throw err;
        //console.log(result);
        const beef = result.filter(r => r.Protein === 'Beef');
        const chicken = result.filter(r => r.Protein === 'Chicken');
        res.render('recipeList', {chicken, beef}, function (err,html) {
            if (err) console.error(err);
            res.send(html);
        });
    });
});

app.post("/add_recipe", function (req, res) {
    console.log(req.body);
    connection.query('SELECT MAX(RecipeID) AS maxID FROM recipes', (err,result) => {
        if(err) {
            console.log("Error on recipe insert");
            throw err;
        } const id = result[0].maxID+1;
        connection.query(`INSERT INTO recipes(RecipeName, RecipeID, Protein) VALUES (?,?,?);`,[req.body.title, id, req.body.protein], (err, _) => {
            if(err) {
                console.log("Error on recipe insert");
                throw err;
            } req.body.ingredients.forEach(i => {
                connection.query(`SELECT DISTINCT Description FROM ingredients WHERE Ingredient = ?;`,i, (err,result) => {
                    if(err) {
                        console.log("Error on ingredient desc get");
                        throw err;
                    } connection.query(`INSERT INTO ingredients(RecipeID, Ingredient, Description) VALUES (?, ?, ?);`,[id,i,result[0].Description], (err, _) => {
                        if(err) {
                            console.log("Error on ingredient insert");
                            throw err;
                        }
                    });
                });
            });
        });
    });
    res.redirect('/recipeList');
});
