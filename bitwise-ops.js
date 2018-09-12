/**JS stores all numbers as IEEE-754 64-bit format
 * bitwise operators do not work on the 64 bit but convert to 32 bit
 * and the result is converted back to 64-bit
 * When applied to a non-numeric value the value is first converted to a 
 * number using the Number() function and then the bitwwise opration 
 * applied, the result is a number.
 */
 var c = -13;
c.toString(2); //prints the binary rep of -13; -1101
c.toString(8); //prints the octal rep of -13; -15

/*Bitwise NOT
 * Represented by a tilde and returns the one's -complement of a number (it negates the number and subtracts 1)
 * This is much faster than using - operator since it works at the most basic level of number representation.
 */
 var number = 25;
 var  number2 = ~number; //converts the binary rep of 25 into -25 and subtracts 1
 console.log(number2) //prints -26

//similar to above, but slower:
var c = 25;
var f = -c - 1;
console.log(f); //prints -26

/*Bitwise AND:
 * Uses the & and works on two values
 * Get the binary representation of each number, lines up the bits of each then uses a truth table to get the 
 * resulting value.
 *
 * 0000 0010 0111 0010 0001
 * 0011 1001 0000 1011 0001
 * ------------------------
 * 0000 0000 0000 0010 0001
 * ------------------------
 * The result is only 1 if both corresponding bits are 1, otherwise 0
 */
var t = 23 & 4;
console.log(t);


/*Bitwise OR:
 * represented as a pipe | character
 * Works on two values and follows the OR rules in a truth table
 * i.e it returns 1 if atleast one the bits is a 1 else 0
 */
var result = 34 | 13; 

/*Bitwise XOR
 * Represented by a caret (^) and works on two values
 * Returns 1 when exactly one bit has a value of 1, if both have a value of 1
 * 0 is returned.
 *
 */

/*Bitwise operators: 
 * Left Shift: shifts all bits in a number to the left by the number of positions 
 * given. Represented by <<. When bits are shifted, empty bits are created to the left and filles
 * with zeroes to make the result a complete 32 bit number.*/
  var val = 2; //equal to binary 10
  var newVal = val << 5; //equal to binary 100000 which is 64 in base 10
/* A right shift is the exact opposite of a left shift, In both cases the sign of the 
 * number is preserved.
 *
 * Unsigned right shift: Represented by >>>. Shifts all bits to the right. For positive numbers the effect is the same as signed 
 * right shift, for negative numners, empty bits get filled with numbers regardless of the sign of the number
 *
 * Boolean Operators: AND, NOR, OR
 * NOT: Represented by !, can be applied to any value, returns a boolean value.
 * It converts the operand to a boolean and negates it.
 * How it acts on operands: */
   var c = {};
   console.log(!c); //false 
   
   var str1 = ""; 
   console.log(!str1); //true
var str2 = "This is a non-empty string";
console.log(!str2); //false

var f = 0;
console.log(!f); //true

var f = 2;
console.log(!f); //false (for any other number not 0)


var f = null;
console.log(!f); //true

var x = NaN;
console.log(!x); //true

console.log(y); //true for undefined vars

/*Logical AND*/


