//BOM: A model that provides objects that expose browser functionality
//indipendent of any web page content.
//The window object: represents an instance of the browser, acts as the JS 
//interface to the browser and as the global object.
//All variables, objects and functions defined on a web page have it as the
//global object and have access to its methods.All variables and 
//methods declared globally become properties and methods of the window object.

//define variable and function in global scope
var age = 64;
function sayAge(){
	console.log(this.age);
}

window.age; //64
window.sayAge(); //64
sayAge(); //64

//defining a property directly on the window object
window.color = 'red';
//this can be removed by using the delete operator
delete window.color;

//when frames are used, each frame has its own window objecA


//Window positioning
//Different browsers use different  properties to get the position of
//the window object
//screenLeft & screenTop -> Gives the windows location in relation to the screen's 
//left and top positions. Used for IE, Safari, Chrome, Opera
//in Firefox(also supported in chrome & safari), screenX and screenY is used.
//
//Determine the position of left and top of the window accross browsers:

var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;

//Navigating and opening windows
window.open(url,windowTarget,featureStrings,replaceLoadedPageInHistory);

window.open("http://www.google.com");//open url in new window tab
window.open("http://www.google.com","top"); //opens url in window named 'top'
//special names for the second argument can be used such as _self, _blank, _parent, _top
//same as <a href = "http://www.google.com" target="top"></a>
//
//Pop up windows:
//When the 2nd argument does not specify an existing window, t
//the 3rd argument allows one to specify the properties of a window
window.open('https://accounts.google.com/',"_blank","height=700,width=300,location=no,menubar=no,toolbar=no,status=no,top=100");
//it is a string of commma delimited strings and values that define the window
//the method returns a reference to a window object that can be manipulated(unlike the main window which
//most browsers have disabled manipulation) eg move, resize ,close
//

//Timeouts and intervals
//Timeouts: execute code after a specified amount of time
//Intervals: Execute code repeatedly while waiting for specific amount of time between each execution
//Timeouts are set using the window.setTimeOut() args: 2, code to execute, amount of time in milliseconds.
setTimeout("alert(hello!)",1000); //not recommended because of string inefficiencies

setTimeout(function(){
	alert('hello');
}, 2000); //preffered
//the method returns a numeric id of the scheduled code (js is single threaded so the time out is really
//a way to specify a delay time for adding the code to be executed into a queue).
//This id can be used to cancel the execution using:
var timeOutId = window.setTimeout(function(){
	alert('he');
},2000);

clearTimeout(timeOutId); //cancels the timer
//all code executed in a timerruns in global scope and so 
//this always refers to the window object (points to undefined)

//intervals:
setInterval(function(){
	console.log('Executing...');
},2000); //execute code after every 2 secs
//also return an id that can be used to cancel the timer
//
var intervalId = null;
var max = 0;
var number = 0;
function incrementNumber(){
    number++;
    if(number == max){
        clearInterval(intervalId);
        alert('Done');
    }
}
intervalId = setInterval(incrementNumber,1000);
//run the code in function every 1 sec until a max number is reached, then stop 
//the execution
//It is recommended to use timeouts in place of intervals  because time between 
//beginning of one interval and the nex is not guaranteed.
//
//
//The location object:Provides information about the document currently 
//loaded in the window. 
//It is a property of both window and document
window.location
document.location //both are the same location object
//location property contains the url in separately accessible segments
//such as host, pathname, host, port, protocol etc
window.location.protocol
window.location.host
window.location.pathname
window.location.port

//manipulating the location object
location.assign("http://google.com"); //starts process of navigating to the url 
//and records this to the browser history stack
//changing  the location properties can also alter the current url
location.hash = "#section2"; //adds to hash to the url 
location.search = "?q=pesi"; //changes url to 'http:google.com?q=pesi'
location.pathname = "myDir"; //changes url to add path name at end
//all the above changes exept hash cause a page reload
//
//to prevent the reloaded page from being added to the browser's history 
//stack, the replace method is used
location.replace('http:mail.google.com'); //user cant click back to previous page

//reloading a page
location.realod(); //reloads page (from cache if nothing has changed)
location.reload(true); //forces fresh reload from the server

//Navigator object: the standard for browser identification on the client
navigator.appCodeName; //Name of the browser, typically Mozilla
navigator.appName; //full browser name
navigator.appVersion; //version of the browser
navigator.mimeTypes; //mimetypes registred with the browser
navigator.onLine; //if browser is connected to internet
navigator.platform; //os the browser is running on
navigator.plugins; //list of all instaled plugins
navigator.product; //name of the product; typically gecko
navigator.userAgent; //user agent string of the browser

//History object:represents the users navigation history since the window was first used
//is a property if window and so every window, tab or frame has its own history object
//urls cannot be known for security reasons but can be navigated back and forward
history.go(-1);  //go back 1 page 
history.go(2); //go forward 2 pages
history.go('www.google.com'); //go to first entrty of this url in history
//if not found do nothing
history.back(); //goes back 1 page
history.forward();// goes forward 1 page
history.length(); //indicates the number of items in the history stack

