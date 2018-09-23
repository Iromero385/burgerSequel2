// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res){
    db.Burger.findAll().then(function(dbBurger){
      var object = {burgers:dbBurger}
      res.render("index", object);
    })
  });


  
};
