//Reference types that wrap primitive values
//Boolean, Number & String types
//Every time a primitive type of the above is read, a corresponding wrapper type is created behind the scenes. This allow a  number of methods to be used on the object.
var s1 = "some text";
s1.substring(2);
//a reference type is created for the primitive s1 when it is read and therefore object methods can be used.
//When s1 is read in the 2nd line, the following happens:
//An instance of String type is created.
//A call to the specified method if the instance
//The instance is destroyed.
//
//Compared to reference types, primitive wrappers only exist on the line of code they are created on.
var s1 = "some text";
s1.color = "green";
alert(s1.color); //undefined
//calling typeof on primitive wrapper objects results in 'object' 
//all primitive wrapper objects convert to the Boolean value true
//
//The Object construct can also act as a factory for instances bassed on the type of value passed.
var obj = new Object("Some string");
alert(obj instanceof String) //true

//casting
var value = "34";
var number = Number(value); //casting function
alert(typeof number); //number

//constructor
var obj = new Number(value);
alert(typeof obj); //object

//every primitive wrapper type makes data manipulation easier.
//
//Boolean Wrapper
var booleanObj = new Boolean(true);
//Instances of Boolean override valueOf () to return a primitive value of true or false//toString() is also overriden to return a string of 'true' or 'false'
//confusing bit:
var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result); //true, because it is the object falseObject being evaluated not its value. All objects are automatically converted to true in Boolean expressions.

var falseValue = false;
result = falseValue && true;
alert(result); //false

// typeOf() returns "boolean" for primitive boolean but 'object' for Boolean reference types.
// Recomended never use the Boolean type, always use the primitive.


