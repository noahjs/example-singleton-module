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

/*
    Note this is exporting the return of the called function so this
    will never be "newed" up again when NPM caches it using require
 */
module.exports = new Stateful();
// OR
// module.exports = require('./stateless.js')();