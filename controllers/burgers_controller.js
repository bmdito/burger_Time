var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();

//imports burger.js model
var burger = require("../models/burger.js");

//Create routes for gets and posts

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get("/burgers", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req,res){
    console.log(req.body.burger_name, " was entered");  
    burger.create('burger_name', req.body.burger_name, function(){
       
        res.redirect('/burgers');
        // res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured : req.body.devoured
    }, condition, function(){
        // if(result.changedRows == 0){
        //     return res.status(404).end();
        // } else {
            
        //     res.status(200).end();
        // }
        res.redirect("/burgers");
    });
});

router.delete("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    if(result.affectedRows == 0){
        return res.status(404).end();
    } else {
        burger.delete(condition, function(){
            res.redirect("/burgers");
        });
        
    }
})


module.exports = router;