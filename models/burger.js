var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  InsertOne: function (vals, cb) {
    orm.InsertOne("burgers", ["burger_name", "devoured"], [vals, 0], function (res) {
      cb(res);
    });
  },
  updateOne: function (burger_id, cb) {
    var condition = "id = " + burger_id;
    orm.updateOne("burgers", {
      devoured: 1
    },
      condition,
      function (res) {
        cb(res);
      });
  }
}
module.exports = burger;