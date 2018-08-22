/*JS operators*/
/*Unary Operators (++/--)
 * Prefix: The variable's value is changed before the statement is evaluated
 * Postfix: The variable's value is changed after the statement is evaluated
 * The differences only matter when the operators are mixed with other operations
 * *The operrators work on any vraible types*/

var age = 31;
++age; //no difference from postfix since its the only statement.

console.log((++age)); //returns 33
console.log((age++)); //return 33, postfix is evaluated after the statement returns.
console.log(age); //returns 34

var x = 34;
var y = --x + 5; //returns 38

var t = 40;
var s = t---3; //s is 37
console.log(t); //t= 39;

//using the operators on other variable types
//On a valid number string, increments, on an invalid string, returns NaN
var f = '23'; 
f++;
console.log(f); //f = 24

//on a Boolean, converts to a number and applies the change
var state = false;
state++
console.log(state);//state=1

var s2 = new Boolean();
s2++;
console.log(s2); //s2 is 1;

//On a FP number
var u = 84.3242343;
u++;
console.log(u); //85.3242343

//On an object: call ist valueOf() to get value to work with, apply the other rules
//if result is NaN, then call toString() and apply the othr rules. The variable is changed 
//from an object to a number.
//
var obj = {
	valueOf: function(){
		return -1;
	}
}
obj++;
console.log(obj); //obj is now -2

//the same rules apply to the unary + and - except that they
//do not change the value of the variable.
//The main use of the unary minus is to negate a value;
var d = 9;
d = -d;
console.log(d); //d is now -9

var e = '-34';
-e;
console.log(e); //e is now a number value of 34

var w = 's';
s = -s;
console.log(s); //s is NaN




