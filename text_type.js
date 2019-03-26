//Text type represents text node which contains plain text
//xtics: nodeType=3, nodeName=#text, nodeValue: text contained in node
//parentNode: an Element

<div></div> //no content, no text node
<div>   </div> //whitespace, one text node
<div id='div1'>Some text</div>//content, one text node
//get the text node
var div = document.getElementById('div1');
var txnode = div.firstChild; //or div.childNodes[0];

//changing  the string
//nb: the string is HTML/xml encoded depending on the doc and therefore
//any less than, greater than or quote marks are escaped.
div.firstChild.nodeValue = "Some other text";

//creating text nodes
var textNode = document.createTextNode("Some Text");
var element = document.createElement("div");
element.appendChild(textNode);

//An element can have multiple text nodes.
//the normalize method can be used to join together multiple text nodes 
//into a single text node whose value is a concatenation of the strings 
//the method is called on the parent node
element.normalize();// joins multiple text nodes into 1 tx node with string
//joined.
//
//splitting strings
//splitText() is used to split a text node into two text nodes, separting the
//nodeValue at a given offset.
var textNode = document.createTextNode("Hello World");
var element = document.createElement('div');
element.appendChild(textNode);

var newNode = element.firstChild.splitText(5);
console.log(element.firstChild.nodeValue); //Hello
console.log(newNode.nodeValue); //World


