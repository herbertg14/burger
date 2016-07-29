
var express = require('express');
var router = express.Router();
var cat = require('../models/burger.js');


router.get("/", function(req,res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req,res){

});

router.post("/burgers/create", function(req, res){

});

router.put("/burgers/update/:id", function(req, res){

});

//dont know if ill need this 
router.delete("/burgers/delete/:id", function(req,res){

});

module.exports = router; 