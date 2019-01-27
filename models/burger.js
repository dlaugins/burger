var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  InsertOne: function(vals, cb) {
    orm.InsertOne("burgers","burger_name" , vals, function(res) {
      cb(res);
    });
  },
  UpdateOne: function(vals, cb) {
    orm.UpdateOne("burgers","burger_name" , vals, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;