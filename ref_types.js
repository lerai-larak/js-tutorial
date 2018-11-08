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


//array detection in single global scope
myArr = instanceof Array

//array detection regardless of number of global scopes
Array.isArray(myArr);


//conversion methods
// toString() and valueOf() return the same value when called on an array
//return a comma sepated list of values in the array
var colors = ['red','green','yellow'];
colors.toString(); //red,green, yellow
colors.valueOf();//red, green, yellow

//using the join() method to construct string with different separator
var team = ['John','Allex','Simon'];
alert(team.join(";")); //prints John;Allex;Simon

//toString(), toLocalString(), join() and valueOf() represent a null or 
//empty array using an empty string 

//Using an array as a Stack (to act as a LIFO container)
//uses 2 methods:
//push(): Inserts args at the end of the array, returns the array new length
//pop(): Removes the last item the array and returns it.
var products = new Array('Cows','Goats');
var count = products.push('Sheep'); //inserts new item at the end returns the new size of the array

var item = products.pop();//returns the last item in the array-'sheep'

//Queue Methods
//Restrict access in a FIFO fashion, a queue adds items at the end and retrives at the bottom
//push() is used to add items at the end of the queue
//shift() removes the first item of the array and returns it, decrements length of array by 1
//Array can be used as a queue by combining push() and shift()

var colors = ['red','green','yellow'];
colors.push('green'); //adds 'green' at the end
colors.length; //prints 4
var firstColor = colors.shift();//removes 'red' and returns it, decrements array length by 1 
//unshift(): adds an item(s) at the front of the array and returns the new length of the array
//using unshift() and pop() can be used to simulate a queue in the opposite direction.

//create a reverse queue
var users = new Array('jack','jane','rose');
users.unshift('kim'); //add an item at the front
var user = users.pop(); //remove an item at the end and return it

//Reordering Methods
//deal with the reordering of items in the array
//reverse() : reverses the order of items in array.
var values = [1,2,3,4,5];
values.reverse();
console.log(values); //5,4,3,2,1

//sort(): by default puts items in ascending order
var numbers = [4,8,1,5,9];
numbers.sort();
console.log(numbers); //1,4,5,8,9
//it works by converting items to strings and comparing the strings
//this means 10 would come before 5 when string are compared, not a 
//desired result.
var items = [4,5,12,8];
items.sort() //12,4,5,8

//for ideal comparissons, the sort method is used together with a comparison 
//function that takes 2 args and:
//returns -ve number if first arg should come before the second
//0 if both args are equal
//+ number if first arg should come after the second arg
function compare(value1, value2){
	if(value1 < value2){
		return -1;
	}else if (value1 > value2){
		return 1;
	}else{
		return 0;
	}
} //compare function

//this function can be passed as an argument to the sort function
var nums = [2,5,12,7,5];
nums.sort(compare); //2,5,7,12

//both reverse() and sort() return a reference to the array in which they were applied

//Manipulation methods:
//concat(): creates a copy of the array it is called on and appends the arguments at 
//the end. It returns the newly constructed array.
//If no arguments are found it simply creates a clone of the array and returns it.
//The arguents can be an array or items
//
var color = ["red","green"];
var color2 = color.concat("yellow");
console.log(color2);//red, green, yellow
var color3 = color2.concat(["blue","black"],"orange");
console.log(color3); //red,green,yellow,blue,black,orange

//slice(); //returns a section of the array
var items = ["dog","cat","horse"];
var slice1 = items.slice(1);//returns cat,horse
var slice2 = items.slice(0,1);//returns dog, since it starts at 0, stops at 1

//if either start or end is a negative number it is subtracted from the length of the array
items.slice(-1);//returns (length - 1) >>cat

//splice() //insert, delete or replace items in the middle of an array
var products = ["shoes","pens","bag","shorts","books","beer","cup"];
//delete: specify position of first item to delete and number of items to be deleted
products.splice(2,4);//deletes 4 items starting at item position 2; returns, the array of deleted items
//the array will now have; shoes,pen,cup
//insertion: provide 3 or more arguments, starting position, 0 the number of itesm to delete, 
//number or items to insert
products.splice(2,0,"fruits");//insert item 'fruit' at array position 2

//replacement: deletes items while simultaneously inserting items
//3 arguments: start pos, number of items to delete, number of items to insert

products.splice(2,1,"radio","phone");//delete 1 item at position 2 and insert 2 items at the same postion

//Location methods:2 methods, both accept 2 params, what to look for and where to start looking
//indexOf(): Starts from the front of the array and moves forward to the back
//lastIndexOf(): starts searching from the last item to the front
//Both return the position of the item in the array or -1 if the item is not found
//An identity comparison is used to compare the arguments by type and value(===)
var numbers = [1,2,3,4,5,6,7,8,9,3];
numbers.indexOf(5);//4
numbers.indexOf(18); //-1
numbers.indexOf('3'); //-1
numbers.lastIdexOf(3); //9

//Iterative methods:
//EC5 defines 5 methods to iterate arrays, each accepts 2 args.
//arg1: a function to run on each item
//arg2: an optional scope object on which to run the function
//The function passed to the methods takes 3 args: array item value, position of the 
//item in the array and the array object itself
//every(): Runs the given function for every item in the array and returns true if the 
//function returns true for every item
//filter(): runs the function and returns an array of items for which the function 
//returns true
//foreach(): Runs the given function for each item in the array, has no return value
//map(): runs the  given function and return the result of each function call in 
//an array
//some(): runs the given function and returns true if the function returns 
//true for any one item
//
//All the methods do not change the values in the array
//
//every(): check if all numbers are greater than 0 in array();

var numbers = [2,5,6,8,1,9,0];
var hasNoZeroDigit =  numbers.every(function(item,index,array){
	return item > 0;
});
console.log(hasNoZeroDigit); //false

//foreach()
var numbers = [2,4,6,8,10];
numbers.foreach(function(item,index,array){
	console.log(item * 10);
}

//Reduction Methods
//reduce():iterate over items and build up  value to be returned
//accepts two args: a function that accepts four args: the previous value,current value,items index,array object
//an optional initial value apon which the reduction is based
//any item returned from the function is passed as an argument for the next item
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev,curr,index,array){
	return prev + curr;
});
console.log(sum);
