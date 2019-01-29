//BOM: A model that provides objects that expose browser functionality
//indipendent of any web page content.
//The window object: represents an instance of the browser, acts as the JS 
//interface to the browser and as the global object.
//All variables, objects and functions defined on a web page have it as the
//global object and have access to its methods.All variables and 
//methods declared globally become properties and methods of the window object.

//define variable and function in global scope
var age = 64;
function sayAge(){
	console.log(this.age);
}

window.age; //64
window.sayAge(); //64
sayAge(); //64

//defining a property directly on the window object
window.color = 'red';
//this can be removed by using the delete operator
delete window.color;

//when frames are used, each frame has its own window object
//
