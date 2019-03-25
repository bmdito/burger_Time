var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //the variables cols and vals are arrays
    insertOne : function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne : function (objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(cb){
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