/**
 * Library stateless.js
 */

var Stateless = function(){
    this.string = "AAA"
}
Stateless.prototype.set = function(){
    this.string = "BBB";
}
Stateless.prototype.get = function(){
    return this.string;
}

/*
    Note this is exporting a Function that needs to get called
    AFTER it is required into another script
 */
module.exports = function(){
    return new Stateless();
}