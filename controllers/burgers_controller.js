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


router.patch("/api/burger", function (req, res) {
  let vals = true;
  let cols = "devoured";
  let condition = "id = " + req.body.ateID;
  burger.update(vals, cols, condition, function(result){
    if (result.changedRows == 0) {
      return res.status(404).end();
    }
  });
});

router.delete("/api/burger", function(req, res) {
  burger.reset(function(results) {
      res.status(200).end();
  });
});


  
  
  module.exports = router;
  