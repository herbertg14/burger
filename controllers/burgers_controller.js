
var express = require('express');
var router = express.Router();
var cat = require('../models/burger.js');


router.get("/", function(req,res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req,res){
	burger.selectAll(function(data){
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res){
	burger.insertOne(["burger_name"], [req.body.name], function(data){
		res.redirect("/burgers");
	});
});

// definitely check this in the orm and burger.js, works different than example
// I think I should make it more like .delete
router.put("/burgers/update/:id", function(req, res){
	var condition = "id = " + req.params.id;
	
	burger.updateOne({"devoured": "1"}, condition, function(data){
		res.redirect("/burgers");
	});
});


module.exports = router; 