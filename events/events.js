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
