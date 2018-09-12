/**For-In statement: Iterates an object for properties
 * Syntax: for(property in expresssion) statement
 */

/*Display all the properties of the BOM window object*/
if (window != null && window != 'Undefined'){
	for (var propName in window){
	console.log(propName)
	}
}

/*Break and continue:
 * Provide stricter control of code execution in a loop
 * Break: Exits the loop immediately, forcing execution to continue 
 * with the next statement after the loop.
 * Continue: Exits the loop immediately but execution continues from 
 * the top of the loop
 */

var number = 1;
for (var i = 1; i < 10; i++){
	if(i % 5 == 0){
		break;
	}
	number++;
}
console.log(number); //prints 5

//continue
var number2 = 1;

for (var i = 1; i < 10; i++){
        if(i % 5 == 0){
               continue;
        }
        number++;
}
console.log(number);

//with statement: Sets scope of code within a particular object
//Syntax: with(expression) statement;
//Used for convinience when a single obj is accessed over and over

var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

//simplified using with statement:
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}

