/*Regular expressions
 * Syntax: var expr = /pattern/[flags]
 * Flags:
 * g -> global mode, pattern is applied to all of the string instead of stopping at the first match found
 * i -> case insensitive mode, case of pattern and string are ignored when detrmining matches.
 * m-> Multiline, continue looking for matches after the end of a line of text
 * */

var pattern1 = /at/g; //match all occurences of "at" in a string
var pattern2 = /[bc]at/i; //mat the first instance of bat or cat in a string regardless of the case
var pattern3 = /.at/gi; //match all three character combinations ending with "at" regardless of case.

//metacharacters have uses in a regex and must be escaped using a backslash when being matched as part of a pattern.
//([{\^$|}])?*.
var pattern4 = /\[bc\]at/gi; //match all instances of "[bc]at" in a string
var pattern5 = /\.at/gi; //match all instances of ".at" in a string

//creating a regex using a constructor
////accepts 2 args:  a string pattern and an optional string of flags to apply
var pattern6 = new RegExp("[br]at", "gi"); //similar literal form of a regex, match all instances of "bat" or "rat" in a string
//all meta-characers must be double escaped when using the constructor as must all characters that are already escaped eg \n in a string is double escaped so in a regex this will also be escaped. \\\\n
var pattern7 = new Regex("\\[bc\\]at", "gi"); //all matches of "[bc]at" in a string 
var pattern8 = new Regex("\\.com","i"); //match first occurence of ".com" in a string

//RegExp instance methods
//exec(): accepts string to be applied by pattern
//returns an array of info on first match
//index of the matched string in the source string
//the input string the pattern is run against
vat txt = "moma poap and baby";
var pat1 = /moma ( popa ( and baby/gi; //capture groups
var matches = pat1.exec(txt); 
matches.index; //0
matches.input; //"moma popa and baby"
matches[0]; //"moma popa and baby"
matches[1]; //"popa and baby"
matches[2]; //and baby

//test()
//accepts a string and returns tru if the pattern matches the argument, false if it doeds no
var pattern = /\d{2}-\d{3}-\d{4}/i
var string = "93-432-3422";
console.log(pattern.test(string));
//
//RegExp constructor properties
//used to extract information about the operation of a Regex expression
var str = "This is a long break in a thong";
var pattern = /(.)ong/gi;
if(pattern.test(str)){
	console.log(RegExp.input); //last string matched against ($_)
	console.log(RegExp.leftContext); //text in input string prior to lastMatch ($`)
	console.log(RegExp.rightContext); //text in input string after lastMatch ($')
	console.log(RegExp.lastMatch); //the last matched text ($&)
	console.log(RegExp.lastParen); //last matched capturing group ($+)
	console.log(RegExp.multiline); //boolean check if expression is multiline mode($*)
}
//the shortcuts in brackets can be used as shortcuts:
RegExp.$_;
RegExp["$`"];
RegExp["$'"];
RegExp["$&"];
RegExp["$+"];


