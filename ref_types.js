/*Reference type: An ECMAScript type that whose instance is an reference value/ object.
 * Native reference type is Object.
 * Created in two ways:
 */

//method 1: new operator with Object constructor
var person = new Object();
person.name = 'Allei';
person.age = 45;

//method 2: object literal notation
var person = {
	name : 'allef',
	age : 45,
	'gender' : 'M',
	5 : true //5 will be automatcally converted to a string
}

//also possible:
var p3 = {};
p3.name = 'Hosier';
p3.age = 45;

//preffered method is object notation
//
//using object notation to pass arguments to a function
//
//
function printMessage(args){
	console.log(args);
	var message = "";
	if(!Object.keys(args).length == 0){
		if(typeof args.name == "string"){
			message ="Name: " + args.name + "\n";
		}
		if(typeof args.age == "number"){
			message =+ "Age: " + args.age + "\n";
		}
	}
	alert(message);
}

printMessage({
	name:"Alo",
	age:23
	});

//object properties can also be accessed through bracket notation
var person = {"job" : "developer", "residence":"Kilimani"};
console.log(person["job"]);
//this approach allow one to use variables
//and in situations where the property name has characters that would cause a syntax error 
//when accessed via dot notation e.g spaces or key words
var propertyName = "job";
console.log(person[propertName]);
//
//
//The Array type
//Represents an ordered list of data, can hold any type of data in each slot
//so an array can contain different types
//Are dynamically sized 
//created in two bsic ways:
//using the constructor
var colors = new Array(); 
var colors = new Array(12); //initial length of 12
var colors = new Array("red", "green","yellow", "black");
var users = Array(3); //omit the new keyword

//create array using array literal notation
var colors = ["red","green","yellow"];
var names = [];
var users[2]; //array with 3 items
var fruits = [2,3,]; //in IE becomes array with 2 items and 3rd Undefined


//setting and getting arrays
var colors = new Array("red", "green","yellow", "black");
colors[2] = "limegreen";//changes "yellow" to "green"
colors[4] = "brown"; //adds a new item at index fruits[4]
colors.length = 2;//removes all other items except the first 2
colors[3]//undefined
colors.length = 10;
colors[6]; //undefined

var names = Array("Allen", "Bodier");
names[names.length] = "Resop"; //add a name at end of array
//The last item in the array is always length - 1


