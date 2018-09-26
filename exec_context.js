//execution context determines the data a variable/function has access to and how 
//it behaves.
//Each exec context has an associated variable object apon which all its defined variables
//and functions exist. (It is used internally).
//In the global execution env for browser implementations of ECMAScript, the window object 
//represents the global context. So all global variables are properties and methods of this object.
//An execution context is destroyed after all its code is executed,the global context is destroyed 
//after the application exits e.g browser shut or page closed.
//
//Each function has its  execution context which is pushed into a context stack when the 
//function starts executing. After its done, the context is popped from the stack, returning control
//to the previously executing context.
//
//scope chain: an ordering of variable objects when a function execurtes in a context. It provides 
//ordered access to all variables and functions that the execution context has access to.
//The front of the context is always the variable object of the context whose code is currently 
//executing, the next variable obj is from the containing context and so on untill the last 
//context which is always the global context's variable.
//Identifiers are resolved by seraching the scope chain for the identifier name
//Each scope chain can search up the chain for functions and varibales but not down the chain into 
//another scope chain
//
//JS does not have block level scope. Vriables created inside a block continue 
//to exist after the block's scope.

if(true){
	var c = 'Tested';
}
console.log(c); // will return 'Tested'

//A variable declared using var is added to the most immediate context available.
//If a varible is initialized without first being declared, it is added to the global
//context automatically.

function add(num1, num2){
	sum = num1 + num2;
	var sum2 = num1 + num2 + sum;
}

add(12,12);
alert(sum); //will work since sum was initialized with no declration so moved to global context
alert(sum2); //will not work, sum2 is only known in context of the function.

//Identifiers referenced are searched starting from the local context going outward to the global context
//if a varibale identifier is used twice, the most immediate reference overrides the outer
//
var colour = 'red';
function getColor(){
	var color = 'green';
	return color;
}

alert(getColor()); //'green'

