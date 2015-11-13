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

module.exports = function(){
    return new Stateless();
}