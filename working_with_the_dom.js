/** <script>: Used to include javascript into the page either using the src attr
 * ibute to include an external file or incluing text inside the element itself.
 */
//<script type="text/javascript" src="client.js"/>
//The above is added to the DOm as:
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "client.js";
document.body.append(script);

