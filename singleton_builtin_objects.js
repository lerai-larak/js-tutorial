/*BuiltIn objects: Objects supplied by the ECMAScript implementation indipendent of the host env
Developer does not need to explicitly instantiate the object. Eg Object, Array, String
ECMAScript-262 has 2 builtin singleton objects: Math & Global
Global:Not explicitly accessible, a catchall for properties and methods that do not have an owning
object. Examples: isNaN isFinite, parseInt, parseFloat, url encoding methods(encodeURI,encodeURIComponent,
decodeURI, decodeURIComponent), eval
*/
//encoding methods: remove invalid characters (replaces with special UTF-8 encoding)
//from a uri for browser to use the uri

var uri = "http://www.kspace.com/west lands.html#test"
encodeURI(uri);//replaces the space with %, does not encode special characters in the uri
//such as :, //, #

encodeURI(uri); //encodes every non-standard character in the uri

//eval(): works like an interpreter by accepting a single string argument to be executed
eval("alert hello");
//code executed is considered to be part of the execution context in which the  call is made
//and the executed code has the same scope chain as that context
//ie variables in the containing context can be referenced from the eval call
var message = "Hello!"; //in containing scope
eval("alert(message)");  //context of eval method
//functions and variables inside the eval call can also be referenced from outside
//variables and funstions created in eval() are not hoisted since they are contained in 
//a string when the code is being parsed. They are only created at time of eval() execution
//In strict mode, variables and function inside eval() are not available outside
//
//
//Global object properties: undefined, NaN, Infinity, (Reference type constructors: Object,
//Array, Function, Boolean, String, Number, Date, RegExp, Error, EvalError, RangeError, 
//ReferenceError, SyntaxError, TypeError, URIError)
//
//The window object:
//Browsers implement this object as a way to access the global object directly (global object 
//delegate). All variables and functions declared in global scope become proerties 
//on the window object

var color = 'red'; //declare global variable

//define global function
function getColor(){
	console.log(window.color);
}

window.getColor(); //Red

//Another way of getting the global object
var global = function(){
	return this;
}();

//Math object: Contains mathematical info and formulae
Math.E; //2.71828184
Math.LN10; //The natural logarithm of 10->2.3025
Math.LOG10E //the base 10 logaritm of e

//min() and max()
var max = Math.max(3,5,8,6); //8
var min = Math.max(8,29,23,5);//5

//get max value in an array
var values = [2,6,8,7];
var max = Math.max.apply(Math, values);
