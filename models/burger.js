var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColsVals, condition, cb) {
    orm.update("burger", objColsVals, condition, function(res) {
      cb(res);
    });
  },


reset: function(cb){
  let vals = false;
  let cols = "devoured";
  let condition1 = "id <= 4 ";
  orm.update("burger", vals, cols, condition1, function(res1){
    console.log(res1);

  })
  let condition2 = "id > 4";
  orm.delete("burger", condition2, function(res){
    cb(res);
  });
 },

};
// Export the database functions for the controller (catsController.js).
module.exports = burger;