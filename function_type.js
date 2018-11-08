/*A function is an instance of a function type (has properties and methods like othher references)
 * function names are pointers to function objects
 * functions can be assigned to variables
 * This is called a function expression
 */

 var sum = function(num1, num2){
	 return num1  + num2;
 };

var result = sum; //assign variable to function
console.log(result(3,2)); //prints 5

/*Function declaration vs function expression
 * function declarations are loaded in the execution context before 
 * any code is executed*/
 alert(sum(2,5));
 function sum(num1,num2){
	 return num1 + num2;
 }
/*The above code runs ok since the fucntion definition is loaded (by the js engine) before its call is executed
 * This loading is called function declaration hoisting
 */
/**This causes an error if a function expression is used*/
alert(sum(7,4));
var x =  function (num1, num2){
	return num1 + num2;
}

