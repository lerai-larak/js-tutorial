//creating documents in js
var newDiv = document.createElement("div"); //creates an element using the tag specified
//in the arguent and sets its documentOwner property.
newDiv.id = "myNewDiv";
newDiv.className = "main";
//add the new element to the document tree
document.body.appendChild(newDiv);

//element children
//childNodes property contains all the immediate children of the element
//can be other elements,text nodes, comments or processing instructions.
<ul id="mylist">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
//The above list would return 7 child nodes because of the whitespace 
  //between the list items (IE7 and ealier return 3)
  //When navigating child nodes using the childNodes proerty, 
  //this is an important consideration.
//check the nodetype when iterrating nodes
  for(var i=0; len=element.childNodes.length; i < len; i++){
    if (element.childNodes[i].nodeType == 1){ //only if nodetype is ELEMENT_NODE
      //process
    }
  }
//get child element nodes with a particular tag name
var elem = element.getElementsByTagName('li'); //search is rooted in element
//only descendants of the element are returned.
var ul = document.getElementByid('mylist');
var items = ul.getElementsByTagName('li');

