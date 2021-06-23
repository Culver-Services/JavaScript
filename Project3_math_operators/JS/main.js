function myFunction() {         //One click function.
  var y = 5;
  x = y + 2;

  document.getElementById("switch").innerHTML = x ++;
  document.getElementById("switch2").innerHTML = x + 3;
  document.getElementById("switch3").innerHTML = x * y;
  document.getElementById("switch4").innerHTML = x % 5;
  document.getElementById("switch5").innerHTML = x + y;
  document.getElementById("switch6").innerHTML = x --;

  window.alert(Math.random() * 100) + 1;

  }

