/*JS variables can contain primitive or reference values
The five js primitives: undefined, Null, Boolean, string, Number are 
accessed by value(direct manip of the values)
Objects are accessed by reference
Reference values can have properties assigned to them:*/
var person = new Object();
person.age = 25; //dynamic assignment of properties
alert(person.age);
//this does not apply to primitive values
var p = "Nick";
p.age = 32;
alert(p.age); //Undefined

//Copying variables: primitives
var num1 = 5;
var num2 = num1; //copy of value in num1 is created and copied to mem loc of variable num2
		//creates 2 distinct copies of the variable

//Copying variables: Reference values
var obj1 = new Object();
var obj2 = obj1; //obj2 now contains a pointer to obj1
		//the variables are pointing to the same object and changes to one are reflected on the other.
obj1.name = 'Pelo';
alert(obj2.name); //prints 'pelo'


//Argument passing:
//All function args are passed by value in JS (local copy of the value created inside function)
//primitive types:
var count = 10;
function addOne(number){number += 1; return number;}//function to add 1 to passed arg
var result = addOne(count); //11
console.log(count); //10 remains unchanged because copy of variable was passed as arg

//Ref types
var person = new Object();

function setName(obj){
	obj.name = 'Micoud';

	//proof that a copy of the obj is created 
	var obj = new Object();//this will be created as a new object on the heap
	obj.name = 'McGregor';
}

setName(person); //although passed by value to function, the variable obj will point to the object 'person'
alert(person.name) //prints 'Micoud'


