function showAlert(){
  alert('hello world!');
}

function logToConsole(){
  console.log('This is a message!');
}

//Include this file into HTML DOM dynamically
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "client.js";
document.body.append(script);

//Add function to execute on link inside testpage.html
var linkNode = document.getElementById('link1');
linkNode.setAttribute('onclick',"showAlert();");


//Add a link element to stylesheet dynamically to a page
var link = document.createElement(“link”);
link.rel = “stylesheet”;
link.type = “text/css”;
link.href = “styles.css”;
var head = document.getElementsByTagName(“head”)[0];
head.appendChild(link);

//result: <link rel="stylesheet" type="text/css" href="styles.css">

//Adding inline style dynamically
var style = document.createElement(“style”);
style.type = “text/css”;
style.appendChild(document.createTextNode(“body{background-color:red}”));
var head = document.getElementsByTagName(“head”)[0];
head.appendChild(style);




