
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';

let table = prompt("Pick a number any number, just 1 through 10");
while (table <0 || table > 10 )
{ 
alert ("Imposter number alert try again");
let table = prompt("Pick a number any number, just 1 through 10");
}


  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
