const { resolveSoa } = require('dns/promises');
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const hbs = require('hbs');
console.log(path.join(__dirname));

//public static path
const static_path = path.join(__dirname + "/../public");
const template_path = path.join(__dirname + "/../templates/views");
const partial_path = path.join(__dirname + "/../templates/partials");
//console.log(static);
//console.log(static);
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));

app.get("/a", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/weather", (req, res) => {
    res.render("Weather");
})

app.get("*", (req, res) => {
    res.render("404errorNotFound", {
        errorMsg: 'Opps!Page Not Found'
    });
})

app.listen(port, () => {
    console.log(`listeninig at this port ${port}`);
})