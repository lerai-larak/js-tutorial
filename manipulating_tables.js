//HTML DOM provides extra methods for the creation of tables
//create table
var table = document.createElement("table");
table.border = 1;
table.width = "100%";

//create the tdody
var tbody = document.createElement("tbody");
table.appendChild(tbody);

//create the first row
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 2,1"));

//create the second row
tbody.insertRow(1);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,2"));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 2,2"));

document.body.append(table);







