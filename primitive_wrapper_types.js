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

//Number types
var numberObject = new Number(10);
//overrides valueOf() toLocaleString() and toString() 
//valueOf() returns the primitive value. The other two methods return the number as a string
//toString(): optionally accepts another argument for the radix of the number
numberObject.toString(8); //prints 10 in octal format
numberObject.toFixed(2); //prints to 2 decimal places
numberObject.toExponetial(6)//prints in expontial format


//String type
var myStr = new String("My Jospe");
//valueOf(), toString() and toLocalString() all return the object primitive string value

myStr.length; //prints number of characters in the string

// String type methods
//character methods

var words = new String("this is a trial");
words.charAt(3); //prints 's'

words.charCodeAt(1); //prints the character code that represents char at position 1
//i.e '104' is the character code for lower case 'h'
//
//Using bracket notation to access characters
words[2] //prints 'i'

//string manipulation methods
var str1 = "Hello";
var str2 = "World";
var result = str1.concat(str2); //prints Hello World

//three methods used to create strings from substrings
//slice(), substr() and substring()

var string1 = "Ready for the next year!";
var s1 = string1.slice(6,9); //prints 'for'

var s2 = string1.substring(0,12); //prints 'Ready for th'
var s3 = string1.substr(18,3); //the 2nd paramenter in substr() indicates the number of characters to return//prints ' ye'

//negative args
var str2 = "Hello World";
var st1 = str2.slice(-4); //prints 'orld', takes length() + negative arg
var st2 = str2.substring(-4); //prints 'Hello World'  all negative numbers are converted to 0
var st3 = str2.substr(-6); //prints ' World' negative 1st arg is treated as length of str plus the number
//for negative 2nd arg it is converted to 0
//
//String Location methods


