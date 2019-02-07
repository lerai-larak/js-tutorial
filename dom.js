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

