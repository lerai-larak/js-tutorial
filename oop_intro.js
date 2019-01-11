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

