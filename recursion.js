//Recursion

function factorial(number){
    if(number <= 1){
        return 1;
    } else {
        return number * factorial(number -1 );
    }
}

//In this recursive function, the function call inside can be 
//replaced with arguments.callee.(this is a pointer to the function being executed)
//This ensures that the function will work regardless of any changes in the function.
//When writting recursive functions its advisable to always use this approach.
//In strict mode, the value of arguments.callee is not available and instead, 
//named function expressions should be used.
