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
