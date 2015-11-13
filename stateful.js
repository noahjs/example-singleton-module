/**
 * Library stateful.js
 */

var Stateful = function(){
    this.string = "AAA"
}
Stateful.prototype.set = function(){
    this.string = "BBB";
}
Stateful.prototype.get = function(){
    return this.string;
}

module.exports = new Stateful();
// OR
// module.exports = require('./stateless.js')();