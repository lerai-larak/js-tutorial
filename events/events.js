//Events
//standardized in the DOM Level 2 spec
//Event flow: order in which events are received on the page.
//Event bubbling: An approach adopted in handling events where, 
//an event is said to start at the most specific element and flow upwards
//towards the least specific node in the document.
//In the html page the click event will be fired on the div then body then html 
//and finally the document node.
//
//Event capturing works in the opposite way
//
//Defince function to be called as an event handler
//Code executing as an event handler has access to everything 
//in the global scope.
function showMsg(){
  alert('Event type: ' + event.type + '\n' + 'Element id: ' + event.target.id);
}

//by augmenting the scope chain using the with statement
//members of both document and the element can be accessed as if they are local 
//variables. See onlick event handler on the form.
//
//Event handlers should be in try-catch blocks for cases where the user interacts 
//with an element before the handler is fully defined on the page.
//
//DOM Level 0 Event Handlers
//Altenative to adding handers from HTML elements
//All elements have event handler properties which can be assigned properties equal 
//to a function.
var button = document.getElementById('btn1');
button.onclick = function(){
  	alert('Clicked button');
}
//Using this method, the function is considered to belong to the element and so
//runs within the scope of the element and the this attribute can be used.
button.onclick = function(){
  console.log(this.id); //logs the id of the attached element
}

button.onclick = null; //removes the event handler

//DOM Level 2 Event handlers
