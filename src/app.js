const express = require("express");
const port = process.env.PORT || 7070;
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/getinvolved", (req, res) => {
    res.render("getinvolved");
});

app.listen(port, () => {
    console.log("listening to port..");
});