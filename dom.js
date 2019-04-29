//DOM: An API for HTML for XML documents
//Represents a document as a heirachial tree of nodes.
//Allows developers to add, remove, modify individual parts of a page.
//DOM Level 1: Became W3C standard in 1998. Provides interface for basic documen
//t querying and structure.
//Nodes are used to represent HTML elements, attributes and comments  in a HTML 
//page. There are 12 node types, all inherit from a base type.

//Node: an interface implemented by all node types in the DOM. In JS this is imp
//lemented as Node type. All node types inherit from this and share the same pro
//perties and methods.
//Every node has a property that indicates the type of node it is:
//The 12 are: Node.ELEMENT_NODE, Node.ATTRIBUTE_NODE, Node.TEXT_NODE, Node.CDATA
//_SECTION_NODE, Node.ENTITY_REFERENCE_NODE, Node.ENTITY_NODE, Node.PROCESSING_I
//NSTRUCTION_NODE, Node.COMMENT_NODE, Node.DOCUMENT_NODE, Node.DOCUMENT_TYPE_NODE
//Node.DOCUMENT_FRAGMENT_NODE, Node.NOTATION_NODE
//
////check if a node is of a certain type::
 if (someNode.nodeType == Node.ELEMENT_NODE){
   alert("Node is an Element");
 }
//Not all node are supprted in browsers, developers often work with element and 
//text nodes. 

//nodeName and nodeValue: Show the name and value of a node
//the node type should always be checked before running this.
if (someNode.nodeType == Node.ELEMENT_NODE) {
	value = someNode.nodeName; //gets tag name of the element
}

//Node relationships
//Are described inform of a family tree. Each node has a childNodes property
//containing a NodeList. NodeList is a unique object that are queries being run
//against the DOM structure. Changes in the dom cause the nodelist to update aut
//omatically.

var firstNode = someNode.childNodes[0];
var secondNode = someNode.childNodes.item(1);
var nodeCount = someNode.childNodes.length;

//Converting nodeList objects into an array
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes);

//Each node in the dom has a parentNode. All nodes contained within a childNode
//s list have the same parent and their parentNode property points to the same p
//arent. Each node in a childNode list is a sibling of the other. previousSibling
//and nextSibling properties help navigate though the list.
var nodes = document.firstChild.childNodes; // returns head and bodyElement
var node1 = nodes.nextSibling; //returns the next node at the same level(not withstanding)
//the type of the node.
var node1 = nodes.nextElementSibling; //returns the next node at the same level
//that is an element (ignores other types of nodes)

//Manipulating nodes
var paragraph = document.createElement('p');
var newText = document.createTextNode("This is some new text");
var insertedParagraph = paragraph.appendChild(newText);
var node1 = nodes.nextSibling; //get a node in the document
node1.appendChild(insertedParagraph);

//replacing nodes
//get the link tag in testpage.html
var targetNode = document.lastElementChild.lastChild.childNodes[5];
//create a new node
var someNode = document.createTextNode('Meso');
//get the bodyElement node
var bodyElement = document.lastElementChild.lastElementChild;
//replace the link with text
var returnedElement = bodyElement.replaceChild(someNode, targetNode);

//Remove a node
var removedNode = bodyElement.removeNode(someNode);
//For both replaceChild and removeChild, the node is still owned by the document 
//but does not have a location in the document.
//All 4 methods: appendChild(), insertBefore(), removeChild() and replaceChild()
//work with the immediate children of a specific node. So for one to use them 
//the immediate parent node must be known.

//Cloning a node: Creates a copy of the node on which its called
//takes a boolean paremeter that determines if a shallow copy 
//or deep copy is made. 
//Deep copy means the node and its entire subtree nodes are made
//Shallow: only the initial node is cloned.
//The cloned node is returned but has no parent node assigned(orphan)
//the previous methods can be used to add it to the document.

var clone = someNode.cloneNode(true);
var addedNode = body.appendChild(clone);

//cloneNode() does not copy properties in a DOM node eg eventhandlers. Only 
//attributes and optional child nodes are copied.
//
//normalize(): deals with text nodes in a document subtree. Different DOM parser
//implementations cause some text nodes to exist. This method searches and remov
//es empty text nodes in a specified node and its descendants.
//
//Document type
//document is an instance of HTMLDocument which inherits from Document.
//A Document type can represent HTML or XML documents. 
//document represents the entire HTML page.
//is a property of window and so is accessible globally.
var html = document.documentElement;
var html = document.childNodes[0];
var html = document.firstChild;

var body = document.body;
var title = document.title;
document.title = "Another Title"; //sets the document title
var url = document.URL; //gets complete url of loaded page
var domain = document.domain; //gets the domain 
var referrer = document.referrer; //gets the page that linked to this page 

var paragraph = document.getElementById("para1"); //returns the element referenced by the id
//null if no element is found. The id is case sensitive. If more than 1 element on the page 
//with the same id, the method returns the first element found.
//IE7 and ealier will return a form element whose name attribute matches the id
//if that element occurs first in the page. (wierd).

var paragraphs = document.getElementByTagName("p"); //Returns a nodelist (HTMLCollection)
//of all elements on page matching the tag.
var count = paragraphs.count; //number of paragraphs on the doc
var paragraph1 = paragraphs[0]; //get the first paragraph.

var radioBtns = document.getElementByName("color"); //get all elements with the 
name attribute specified. Most used on radio buttons.

//special collections
document.anchors; //returns all <a> elements with a name attribute in the document
document.forms; //contains all <form> elements in the document. same as:
document.getElementsByTagName("form");
document.images: //contains all the <img> elements in the document 
document.links; //contains all the <a> elements with a href attribute in the doc
//the above collections are contantly updated to match the content of the
//current document.
//
//writting to a document
document.write("some text");
document.writeln("some text followed by a new line");
//The methods are oftern used to include external js on a page
//
<script type="text/javascript">
    document.write("<script type=\"text/javascript\" src=\"file.js\">"+"</script>");
</script>
//the above is incorrect since js will interpret the script tag in the string as 
  //the closing script tag, to avoid this the script tag inside the string should
  //be escaped ie <\/script>
  //

//Element type: Represents an HTML or XML element
  //has nodeType nodeName, nodeValue, parentNode and childNodes
  var elem = document.getElementById("p");
  var nodeName1 = elem.nodeName;
  var nodeName2 = elem.tagName;
  nodeName1 === nodeName2; //true
//nb: nodeName and tagName always outputs the name in uppercase.
//
//HTMLElement type Represents all HTML elements directly or through subtyping
//It inherits from Element and adds several props.
//Has properties: id, title, lang, dir, className

div.id; //get id
div.className; //get the class
div.className = "sub"; //changes class attribute of div to 'sub'
div.title = 'a-title'; //change title property of div

//getting and setting attributes
var myDiv = document.getElementById('myDiv');
var divClass = myDiv.getAttribute('class');
//can also be used to fetch custom attributes 
var value = div.getAttribute('my-special-attrib');

//attribute names are case insensitive ID and id are the same
//custom properties in HTML5 are prepended with a data- in order to validate
//attributes are available as DOM but custom elements do not show up as 
//properties of the DOM element.
//NB:style attribute accessed via getAttribute() returns css text, when accessed
//through the dom property it returns an object.
//
//setting attributes
//setAttribute(); accepts 2 args; name of the attribute and and value to set to it
//If attribute exists, it value is replaced, if not the attrib is created and value
//set.
div.setAttribute('class', 'anotherClass');
//Works for html attributes and custom attributes.
//All attributes are properties and can be set directly 
div.class = 'someOtherClass';

//removing attributes
//removes the attribute from the element altogether(both attribute and value)
div.removeAttribute('class');

//The attributes property
//Used only in the Element DOM node type. attribute property has a NamedNodeMap, 
//a live collection of nodes.
div1.attributes; //returns a NamedNodeMap (collection of all attributes in element)
//Every attribute on an element is represented by an
//Attr node, each of which is stored in the NamedNodeMap object. Methods in the 
//object
//getNamedItem(name); //return node whose nodeName prop is equal to name
//removeNamedItem(name); //remove node whose nodeName prop is equal to name
//setNamedItem(node); //adds node to the list, indexing ig by its nodeName property
var id = div.attributes.getNamedItem('id').nodeValue;
var id = div.attributes["id"].nodeValue; //shorthand
//setting values
div.attributes.getNamedItem('id').nodeValue = "someOtherId";

//iterate over an element's nodes attributes

function outputAttributes(element){
  var pairs = new Array(),
    attrName,
    attrValue,
    i,
    len;

  for (i = 0, len=element.attributes.length; i < len; i++){
    attrName = element.attributes[i].nodeName;
    attrValue = element.attributes[i].nodeValue;
    pairs.push(attrName + "=\"" + attrValue + "\"");
  }
  return pairs.join(" ");
}



//HTML5
//Defines more interaction with Javascript than HTML4 spec
//Additions include:
document.getElemenentsByClassName("user current"); //will return a nodelist of 
//all elements in the document with the classes 'user' and 'current' in any order.
var target = document.getElementById('admin').getElementsByClassName("ul");
//gets a nodelist of all lists inside the element with id 'admin'.

//The classList property
//Provides an easier way to manipulate classes in an element
//It is an instance of DOMTokenList and provides the number of items it contains
//and any item can be accessed via item(). It also has methods like:
//add(value), contains(value), remove(value), toogle(value)
//
