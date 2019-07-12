var myVar;
function myFunction() {
  myVar = setInterval(every2sec, 2000);
}

function every2sec() {
  alert("Alert Text!");
}
myFunction();
