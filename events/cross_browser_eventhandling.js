//To address differences in how browser handle events.
//Mostly IE has different way of handling events using the 
//attachEvent() and detachEvent methods
//
//A common object can be used to add events by making use of client 
//detection

//a common object that can be used anywhere to add events and has 2 methods 
//addHandler and removeHandler as properties
var EventUtil = {
  addHandler: function(element, eventType, handler){
    if (element.addEventListener){
      //check if element has DOM Level 2 handler
      element.addEventListener(eventType, handler, false);
    } else if (element.attachEvent){
      //is IE event handler?
      element.attachEvent("on" + eventType, handler);
    } else {
      //resort to DOM Level 0 event handler attaching
      element["on" + eventType] = handler;
    }
  },

  removeHandler: function(element, eventType, handler){
    if (element.removeEventListener){
      element.removeEventListener(eventType, handler, false);
    } else if (element.detachEvent){
      element.detachEvent("on" + eventType, handler);
    } else {
      //remove via DOM Level 0 
      element["on" +eventType] = handler;
    }
  },
