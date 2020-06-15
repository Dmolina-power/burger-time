var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      console.log(data)
        let burgersToEat = [];
        let burgersAte = [];
        data.forEach(function(burger) {
            if (burger.devoured){
                burgersAte.push(burger);
                console.log(burgersAte);
            }else {
                burgersToEat.push(burger);
                console.log(burgersToEat);
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
    burger.create(["burger_name"],[req.body.newBurger], function(results){
        res.json({ id: results.insertId });
    });
  });


router.put("/api/burger/:id", function (req, res) {
  const objColsVals = { devoured: true};
  const condition = "id = " + req.params.id;
  burger.update(objColsVals, condition, function(result){
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    console.log(result);
    res.sendStatus(200)
  });
});




  
  
  module.exports = router;
  