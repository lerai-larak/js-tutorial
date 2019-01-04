/*BuiltIn objects: Objects supplied by the ECMAScript implementation indipendent of the host env
Developer does not need to explicitly instantiate the object. Eg Object, Array, String
ECMAScript-262 has 2 builtin singleton objects: Math & Global
Global:Not explicitly accessible, a catchall for properties and methods that do not have an owning
object. Examples: isNaN isFinite, parseInt, parseFloat, url encoding methods(encodeURI,encodeURIComponent,
decodeURI, decodeURIComponent), eval
*/
//encoding methods: remove invalid characters (replaces with special UTF-8 encoding)
//from a uri for browser to use the uri

var uri = "http://www.kspace.com/west lands.html#test"
encodeURI(uri);//replaces the space with %, does not encode special characters in the uri
//such as :, //, #

encodeURI(uri); //encodes every non-standard character in the uri

//eval(): works like an interpreter by accepting a single string argument to be executed
eval("alert hello");
//code executed is considered to be part of the execution context in which the  call is made
//and the executed code has the same scope chain as that context
//ie variables in the containing context can be referenced from the eval call
var message = "Hello!"; //in containing scope
eval("alert(message)");  //context of eval method
//functions and variables inside the eval call can also be referenced from outside
//variables and funstions created in eval() are not hoisted since they are contained in 
//a string when the code is being parsed. They are only created at time of eval() execution
//In strict mode, variables and function inside eval() are not available outside

