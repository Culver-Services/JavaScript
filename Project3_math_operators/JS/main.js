function myFunction() {
  var x = document.getElementById("demo")
  x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

function myFunction2() {
  var x = document.getElementById("demo")
  x.innerHTML = Math.floor((Math.random() % 100) - 1);
}


function myFunction3(){
let x = 5;
x++;
let z = x;
document.getElementById("demo").innerHTML = z;
}


function myFunction4(){
let x = 5;
--x;
let z = x;
document.getElementById("demo").innerHTML = z;
}
