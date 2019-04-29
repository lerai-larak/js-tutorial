//selector api
//querySelector->accepts a css query and returns the first descendant element
//that matches the pattern or null if none.
//
var body = document.querySelector("body");
//get the element with id "myDiv"
var myDiv = document.querySelector("#myDiv");
//get element with class "selected"
var selected = document.querySelector(".selected");

//when the selector is used on the document type it starts trtying 
//to match from the document element; when used on an element type
//it starts to match from that element and its descendants.

//querySelectorAll(): Returns a static NodeList of matches or an empty nodelist.
var links = document.getElementById('div').querySelectorAll('a');
//get all link elements in 'div'
//
var selected = document.querySelectorAll('.selected');
//get all elements with a class of selected
//
var strong = document.querySelectorAll('p strong');
//get all <strong> elements inside <p> elements

var i, len, strong;
for (i=0, len = strongs.length; i < len; i++){
  strong = strongs[i];
  strong.className = "important";
}


//matchesSelector: returns true or false if a given element matches the selector
if(document.body.matchesSelector("body.page1"){
  }
//Traversal elements added in the Element Traversal API were added to allow easier
  //traversal of elements without checking for white space text and comment node types.
 //childElementCount
  //firstElementChild
  //lastElementChild
  //previousElementSibling
  //nextElementSibling
//

//HTML5
//getElementsByClassName(); gets all elements with the specified class name
var elements = document.getElementsByClassName("myclass"); //NodeList containing
//all elements with that class name in the document tree.

var target = document.getElementsByClassName("admin");
target[0].classList; //get all the classes applied to this element.

//The classList property is of type TokenList and has methods that allow
  //addition, removal, toggling and checking of values
var list = target[0];
list.length; //number of items in list
list.add('user'); //add class to list
list.remove('admin') //removes class from list
list.toggle('user'); //removes class if there and adds if not.
list.contains('admin'); //checks if class has class 'admin'

