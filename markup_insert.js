//HTML5 has standardised ways of injecting HTML into a page dynamically.
//innerHTML
function logHtml(){
  var div = document.getElementById("content");
  console.log(div.innerHTML);
}

//using innerHTML in write mode to add html to a page
//The property is assigned a string assumed to be html
//It parses the sting into a DOM subtree and replaces all the existing 
//child nodes with it. All tags in the string are converted into elements
//NB: reading back the string causes a different string to be returned since the
//string has already been parsed by the browser.
//
//NB: html being inserted from an external source should be sanitised before being
//passed to the innerHTML method.
window.toStaticHTML(htmlText); //removes all script nodes and script event-handler
//attributes.
//
//outerHTML
//In read mode: Returns the HTML of the element on which it is called and its child nodes
var htmlStr = document.getElementById("content").outerHTML();
//in write mode: set the HTML string as a replacement to the element on which it 
//is called.
div.outerHTML = "<p>My paragraph</p>";

//insertAdjacentHTML()
//Accepts 2 arguments, the position to insert in and the HTML text to insert.
//first argument must be one of:
//beforeBegin, afterBegin, beforeend, afterend
//
//scrollIntoView(): scrolls to bring element into view. focus() also does the same.
