var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      console.log(data)
        let burgersToEat = [];
        let burgersAte = [];
        data.forEach(function(burger) {
            if (burger.devoured){
                burgersAte.push(burger);
            }else {
                burgersToEat.push(burger);
            }
        });
        burgersToEat.reverse();
        res.render("index", {
            title: "Eat a burger",
            burgersToEat: burgersToEat,
            burgersAte: burgersAte
        });
    });
      
});


  router.post("/api/burger", function(req, res) {
    burger.create(["name"],[req.body.newBurger], function(results){
        res.json({ id: results.insertId });
    });
  });



  
  
  module.exports = router;
  