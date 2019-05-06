var x = document.activeElement;
//gives a pointer to the DOM element that currently has focus.
//
var button = document.getElementById("myBtn");
button.focus(); //set focus on this button
document.activeElement === button; //true
//when a page loads by default, focus is set on document.body
//and focus is null before the document is loaded.
document.hasFocus(); //returns a boolen indicating if the document has focus.
//this allows one to know is a user is interacting with a document.
//

