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
  	alert("Clicked button");
};
//Using this method, the function is considered to belong to the element and so
//runs within the scope of the element and the this attribute can be used.
button.onclick = function(){
  console.log(this.id); //logs the id of the attached element
}

button.onclick = null; //removes the event handler

//DOM Level 2 Events: Specification for assignment and removal of event handlers
//add an event handler to a button for the click event
var button = document.getElementById("btn1");
btn.addEventListener("click", function(){
  alert('Clicked a button');
}, false);
//The last arguments indicates whether the event hadler is called during the 
//capture phase(true) or during the bubble phase (false)
//
//By using DOM Level 2 method, multiple event handlers can be added. The event 
//handlers fire in the order they are added.
//removeEventListener() is used to remove event handlers added only using the 
//addEventListener() method. It takes the same parameters as addEventHandler
//and does not remove a function added anonymously.
//So it is best to have a variable assignment to a function that is to be used in 
//an event listener.

var handler = function(){
  alert('Called a fucntion in event handler');
}
btn.addEventListener("click", handler, false);
btn.removeEventListener("click",handler,false); //removes the event listener

//The event object
//An object that stores all relevant information gathered when an event is fired 
//related to the DOM.
//In DOM compliant browsers, the event object is passed in as the sole arg to an 
//event handler(regardless of the method used to assign the event handler)


var button = document.getElementById("btn1");
btn.addEventListener("click", function(){
  alert(event.type); //click
}, false);

//when an event is attached using HTML methods, the event object is available 
//as variable called event.
//Some members present in the event object.
//bubbles; cancelable, currentTarget, defaultPrevented, detail, eventPhase
//preventDefault(); stopImmediatePropagation(); stopPropagation(); target; 
//trusted; type; view
//

//In an event handler, this object is always equal to the value of currentTarget 
//property.
div.addEventListener("click", function(){
alert(this); //DOM Element event handler is attached to.
});
//The value of target and currentTarget are equal if the event handler is directly 
//attached to the inteded element. Else, currentTarget may be the element that 
//handled the event after bubbling.
//
