//custom data attributes: allow elements to be specified with non standard attributes
//using the prefix data-. This allows provide information that is not for rendering 
//or semantic value. Useful for tying non-visual data to an element for processing
//eg link tracking
//The attributes can be called named anything but prefixed with data-
<div id="myDiv" data-appId="app892234H" data-developer="pesi inc"></div>

//Can then be accessed using the dataset property of the element. This property 
  //contains an instance of DOMStringMap that will hold all properties of the 
  //data- prefixed attributes. (but without the prefix)

  var div = document.getElementById("myDiv");

//get the values of custom attributes
 var appId = div.dataset.appId;
 var developer = div.dataset.developer;

//set values
 div.dataset.appId = 784756;
 div.dataset.developer = "creek soft";


  
