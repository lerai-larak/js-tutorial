/*Logical AND:
 * Can be used on any operand:
 * Rules if operands are not Boolean:
 * first operand is an object, return second operand
 * second operand is an object return second if first operand is true
 * both are objects, return second operand
 * either operand is null, return null same for NaN and undefined
 */

var x = false;
var y =true;
console.log(x && y);//false

var p = false;
console.log(p && someUnrefVariable); //false, first operand is false
//so the operation is short-circuted, would cause 'Unreferenced'error if the second operand
//was true, since the unref varibale is parsed.
//
//The logical OR operator works in the same way.
