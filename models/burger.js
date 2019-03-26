var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //the variables cols and vals are arrays
    create : function(col, burger_name, cb){
        orm.insertOne("burgers", burger_name, function(res){
            cb(res);
        });
    },
    update : function (obj, condition, cb){
        orm.updateOne("burgers", obj, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;