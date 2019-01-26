/**ECMAScript definition of object: An unordered collection of properties each 
 * of which contains a primitive value, object or function
 *
 * */

//Old style object definition:
var person = new Object();
person.name = "Allec B"
person.age = 32;
person.greet = function(){
	alert('hello');
}

//Modern way:
var person = {
	name: 'Dex J',
	age: 45;
	job: "Software Engineer",

	greet: function(){
		alert('hello');
	}
}

//2 types of properties:
//data properties:
//Have 4 attributes describing thier behavior
//[[congigurable]] : If prop can be redefined by removing the property via delete,
//or changing attribs
//[[Enumerable]]: If property will be retuned in a for-loop
//true by default for all props defined directly on obj
//[[writable]]: if property value can be changed, true by default
//[[Value]]: contains actual data value for the prop, default is 
//undefined
//Adding a property to an obj sets all three attributes to true and [[value]]
//to the assigned value
//To change the default property attributes in JS5 the Object.defineProperty()
//method is used

var person = {};
Object.defineProperty(person, "name", {
	writable: false,
	value: "Nick"
});
alert(person.name); //Nick
person.name = "Vicky";
alert(person.name);//Nick

//accessor properties:contain a getter,setter method which when read,
//the mapped function gets called.
//Also have attributes; [[Configurable]]:if properrty my be redefined by
//removing the proprty via delete or changing attribe, or changing to data property. 
//[[Enumerable]]: if property will be returned in a for-in loop, true by default.
//[[Get]]: function to call when proprty is read from.
//[[Set]]: function to call when property is written into.
//when an accessor is read from, the getter function is called 
//when it is written into, the setter method gets called with the new value
//
//
var book = {
	_year: 2019,
	edition: 1
};

//nb: would need to do this for every property in the  object
Object.defineProperty(book, "year", {
	
	get: function(){
		return this._year;
	},

	set: function(newValue){
		this._year = newValue;
		this.edition += newValue - 2019;
	}
	
});

book.year = 2020; //calls set function
alert(book.edition);//returns 2


//defining multiple properties in an object 

var person = {};

Object.defineProperties(person, {
	_name: {
		value: "Unkwown"
	},

	age:{
		value: 18
	},

	_id: {
		value: 12345678
	},

	name: {
		get: function(){
			return this._name;
		},

		set: function(newValue){
			this._name = newValue
		}

	},
	
	id: {
		get: function(){
			return this._id*2;
		},

		set: function(idValue){
			_id = idValue;
		}
	}
});

//Reading property attributes/descriptors
var descriptor = Object.getOwnPropertyDescriptor(person,"_name");
//returns an object with properties for configurable,enumerable,value and writable (since
//the method is called on a data property)
var descriptor = Object.getOwnPropertyDescriptor(person,"id");
//return an object with properties for configurable,enumerable,get and set(since 
//the ethod is called for an accessor property.

//Object creation
//Using the factory pattern: Creating an object using the Object constructor is 
//fine but tedious when multiple instances are involved because there's a lot 
//of code duplication. So the factory pattern is applicable.

function createPerson(name,age,job){
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.job = job;

	obj.sayName = function(){
		console.log('Name: ' + this.name);
	}
}
//Using the above function multiple objects can be created easily
var worker1 = createPerson('Allex Jon',56,'Software Enginner');
var worker2 = createPerson('Beno Jelo',23,'Graphic Designer');

//Since this approach does not solve the problem on of object identification, 
//the constructor pattern can be used
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		console.log(this.name);
	};
}

var person1 = new Person('James Alow',45,'Farmer');
//By calling the new operator on the function;
//a new object is created, the this value of the constructor is 
//assigned to the new object, execute the code inside the constructor 
//(adds properties to the constructor), return the new object and 
//assign it to the variable

alert(person1,constructor == Person) //true
alert(person1 instanceof Person); //true
alert(person1 instanceof Object); //true

//constructors as functions
//Any function called with a new operator acts as a constructor

//use function as constructor
var person2 = new Person('Jaclo Fesao',34,'Software Engineer');
person2.sayName();

//call as function
Person("Greg",90,"Artist"); //Adds to global object (window). since an explicit this 
//object was not set(by being an object method or using call()/apply()), 
//it is implicitly set to window
window.sayName();

//call in scope of another object
var obj = new Object();
Person.call(obj, "Kirsteb",78,"Nurse");
o.sayName();

//With constructors the problem is that each instance of an object gets a different instance of the 
//function since each function definition in the constructor results in a different object(functions are objects)
//this can be solved by removing the function definition outside the constructor
//although this causes the global scope being polluted with method that are only used with 
//relation to objects. This can be remedied with 
//
//The prototype pattern:
//Each function is created with a prototype property, this property is an object that contains 
//properties and methods that should be available to instances of a particular reference type.
//The object is literally a prototype for the object to be created once the constructor is called.
//all its properties and methods are shared among object instances.
//
//the object info is assigned to the prototype
function Person(){
}

Persn.prototype.name = "Nick";
Person.prototype.age = 34;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};

var person = new Person();
person1.sayName(); //Nicholas

var person2 = new Person();
person2.sayName(); //Nicholas

alert(person1.sayName() == person2.sayName);

//check if a relationship exists between objects
Person.prototype.isPrototypeOf(person); //true

//Get the prototype of an object
Object.getPrototypeOf(person) == Person.prototype; //true
Object.getPrototypeOf(person).name; //Nicholas

//When JS engine encounters a property called on an instance it searches the instance and returns 
//that if not found it goes to the prototype and searches that as well and returns the property
//
//Properties written on an object instance cannot be overwritten but can be masked by adding a 
//similar proprty name to the object 
person1.name = "Peter"; //Adds name property to the instance and hence shadows the name property in the prototype

//the delete operator removes the instance proerty and allows the prototye property to be accessed 
delete(person1.name); 
person1.name //Now gets this proprty from the prototype therefore 'Nicholas'

//hasOwnProperty(); determines if a property exists on the instance or on the prototype
//The method is inherited from Object and returns true only if a property of a given name 
//exists on the object instance
//
person1.hasOwnProperty("name"); //false
person1.name = "Gred";
person1.hasOwnProperty("name"); //true

//The in property is used to determine if a property of a given name is is accessible 
//by the object. ie the property may exist in the instance or the prototype
"name" in person1; //true

//to check if a property exist on the protopype only, the hasOwnProperty() and in operator
//can be combined
function hasPrototypeProperty(object, name){
	return !hasOwnProperty(name) && (name in object);
}

//Object.keys(): retrieves a list of all enumerable properties on an object
//accepts an object as parameter and returns an array of strings containing the 
//names of all enumerable properties
//
var keys = Object.keys(Person.prototype);
alert(keys); //name, age, job, sayName

