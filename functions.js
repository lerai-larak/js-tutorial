/* Do not need a return type in the signature
 * Can have more or less arguments than defined in the parameters
 * Internally, arguments are carried in an object called arguments which acts 
 * as an array(Althogh not one). Args can be accessed inside the 
 * function using arguments[0], arguments[1]...
 * Length() can be used to determine the number of arguments passed.
 */

//Having more args than defined in the params 
//
function calc(x,y){return x % y;} //function definition

calc(2,4,54,12,0.8933); //wont fail;

function showParam(f,g,r){return 'First argument: ' + arguments[0] + 'Last argument: ' + arguments[arguments.length - 1]};

showParam(12,4,32);// will show first and last arguments" 12, 32

//overwritting arguments in a function
function x (a,b){
	arguments[0] = 2;
	console.log(a * b);
}
x(20,10); //prints 20 instead of 200
//Any named argument not passed into a function is automatically ssigned the value undefined
//All arguments in JS/ECMAScript are passed by value. It is not possible to pass by reference
//Method overloading is not possible since functions do not have signatures, args are represented as
//an array of o or more values.
//Defining two functions with the same name in JS result in the last defined funtion owning the name.
//Simulating overloading in JS would involve checking the args passed and reacting accordingly

//In strict mode overwritting arguments results in syntax errors
//
//Functions as values 
//functions name can be used in any place a value is used:
//Into another function as an argument
//Return function as a result of another function

function callSomeFuntion(someFunction, someArgument){
	return someFunction(someArgument);
}

function add10(num){
	return num + 10;
}

var result1 = callSomeFunction(add10,10);
console(result1);

//Function Internals
//Special objects inside any function: 
//arguments: an array like obj that contains all args passed into the function, has a property called callee
//which is a pointer to the function  that owns the arguments object
//this: A reference to the context object the function is operating on
//
function x(num){
	console.log(arguments.length);
}
x();//prints 0
x(2);//print 1
x(2,'hen',true); //prints 3

//Function properties and methods
//In js functions are objects and so have properties anmethods
//Every function has 2 properties:
//length: number of named args the function expects
function sayHello(name){
	alert(name);
}
console.log(sayHello.length); //prints 1

// prototype: the actual location of all instance methods for reference types
// eg. toString() and valueOf()
//
//apply() & call(): both call the function with a specific this value and therefore set the value of the this object inside the function body

//using call()
function sum(num1.num2){
	return num1 + num2;
}

function callSum(num1,num2){
	return sum.call(this,num1, num2);
}

console.log(callSum(2,5)); //prints 7



