// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {
    app.post("/api/burgers", function(req, res) {
        db.Burger.create(
            {
                burger_name:req.body.burger_name,
                devoured:req.body.devoured
            }).then(function(dbBurger){
                res.json(dbBurger)
            })
    });
};