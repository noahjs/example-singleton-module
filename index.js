

/**
 * Controller A with Stateless require
 */
console.log("Controller A-stateless");
var lib = require('./stateless.js')(); // <== Note the function called after require NOT inside module exports
console.log( "A-stateless - get: ", lib.get() ); //"AAA"
lib.set(); // null
console.log( "A-stateless - get: ", lib.get() ); // "BBB"


/**
 * Controller B with Stateless require
 */
console.log("Controller B-stateless");
var lib = require('./stateless.js')();
console.log( "B-stateless - get: ", lib.get() ); // "BBB"


console.log();
console.log();


/**
 * Controller A with Stateful require
 */
console.log("Controller A-stateful");
var lib = require('./stateful.js'); // <== Note the function called INSIDE module exports
console.log( "A-stateful - get: ", lib.get() ); //"AAA"
lib.set(); // null
console.log( "A-stateful - get: ", lib.get() ); // "BBB"


/**
 * Controller B with Stateful require
 */
console.log("Controller B-stateful");
var lib = require('./stateful.js');
console.log( "B-stateless - get: ", lib.get() ); //"AAA"