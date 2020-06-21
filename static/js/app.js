var tableData = data;
// from data.js
  
  let table = document.querySelector("table");
  

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
//   Generate table
  generateTable(table, tableData)

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to monitor events
function runEnter() {

//prevent page refresh
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

    var table1 = document.getElementById('ufo-table');
    var tr = document.getElementsByTagName("tr");
// iterate through table to find rows matching input
    for (var i = 0; i < table1.rows.length; ++i) {
        var cell = tr[i].getElementsByTagName('td')
        cells = table1.rows[i].cells[0].innerHTML
         console.log(cells)
        console.log(inputValue)
    // hide rows that do not match input, reveal ones that do    
        if (cells == inputValue)

            tr[i].style.display = "inherit";
        else
            tr[i].style.display = "none";
}

}

