//Additions to HTML 5 
//
//readyState property
document.readyState; //An check if the document has loaded. 
//two possible states: loading and complete.
//Before it was available, the choice was to use an onload eventHandler
//Usage:
if(document.readyState == "complete"){
  //do things;
}

