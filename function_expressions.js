/**A nameless function created and assigned to a variable name**/
var myFunc = function(arg0, arg1){
	//function body
}
//Are not hoisted during program excution and therefore the function declaration has to 
//appear before its use.
//The ability to assign functions to variables provides the ability to 
//return functions as the value of other functions﻿
function checkNumbers(){
    return function(){
        if( arguments[0] > 0){
            return 1;
        }
        else{
            return 2;
        }
    }
}
//example of a function returning an anonymous function
//the function returned can be assigned to a variable then
//executed by adding() after the variable name to execute
//
