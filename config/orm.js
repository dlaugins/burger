var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput,cb) {
    var queryString = "SELECT * from ?? ;";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  InsertOne: function(whatToInput, tableName, tableValues) {
    var queryString = "INSERT INTO ??(??) VALUES (?) ";
    console.log(queryString);
    connection.query(queryString, [whatToInput, tableName, tableValues], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(whatToInput, tableName, tableValues) {
    var queryString = "INSERT INTO ??(??) VALUES (?) ";
    console.log(queryString);
    connection.query(queryString, [whatToInput, tableName, tableValues], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
//   updateOne: function(table3,condition) {
//     var queryString =
//       "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

//     connection.query(
//       queryString,
//       [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//       function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       }
//     );
//   }
};

module.exports = orm;
