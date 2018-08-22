
/*Javascript for Professionals: Chapter 3--> Datatypes*/

/*
 * typeof is used to determine the data type of a given variable
 * returns on of the following: 
 * undefined-->If the value is undefinedassigned to the variable
 * boolean --> if the value is a boolean
 * string-->if the value is a string
 * number-->if the value is a number
 * object-->if the value is an object
 * function-->value is a function
 *
 * NB: typeof is an operator so parenthesis are not required
 * */
var message = "some string";
var num1 = 32;
function someFunc(){}
console.log(typeof(message));
console.log(typeof(num1)));
console.log(typeof(someFunc));

/**Undefined: 
 * Has a special value: undefined assined to a variable when it is declared but not explicitly 
 * assinged a value*/
var x;
console.log(x == undefined); //true

typeof x; //returns "undefined"
typeof somevar; //also returns "undefined" for undeclared variables (always asing values to variables at declaration
//to avoid to confusion

/*Null type
 * Only has one value of null
 * Logically a null value is an empty object pointer so typeof returns "object" when 
 * passed a null value*/
var y = null;
typeof y; //object

//the value undefined is a derivative of null and so ECMA-262 defines them as equal
null == undefined; //true

/*Boolean
 * Has two literal values, true and false
 * Are distinct and not equal to 1 and 0 respectively
 * Different from True and False, which are valid identifiers and not Boolean values
 * In Js all values have boolean equivalents
 * The Boolean() method returns the boolean value of a datatype
 * eg. an empty string has a boolean value of false,
 * a non zero number returns true, 
 * any object that is not null*/

var m = "My message";
if(m) //calls the Boolean() method on the string 
    {
	console.log('xxx')
    }

/*Number
 * Used to represent integers and floating point numbers
 * Integers can be represented as octal or hex
 * */
var num1 = 023; //Base 8 (octal) number
var num2 = 089; //invalid octal, intepreted as integer 89

var hex1 = 0xA; //hex for 10
var hex2 = 0x12; //hex for 17

//numbers created as hex or octal are treated as decimals in math calculations

var float1 = 56.04;
var float2 = 4.7547e3;

/*NaN: Used to indicate when an operation indeted to return a number has failed*/
x/0; //NaN
isNan("10") //retuens false
isNaN("dfdsdfs"); //true
isNan((true)) //false, cannot be converted to a number

//functions used to convert non-numeric values into numbers
Number()
parseInt()
parseFloat();


/*String
 * Immutable
 * toString() method is used to get the string value of any value*

/**Object
 * A unit of data and functionality
 * created using the nre operator and type of object*/

var o = new Object();




