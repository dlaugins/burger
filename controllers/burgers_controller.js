var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
      burger.selectAll(function(data) {
      var hbsObject = {
       burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.InsertOne(req.body.name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(req.params.id, function(Result){
        res.status(200).end();
  
      });
  });
  

  module.exports = router;