function get_Date() {                                                               //Time function
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");                                                //Local & Global varibles
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    console.log (y + 100 + "<br>");                                                 //Console.log error
   
}
Add_numbers_3 ();
Add_numbers_4 ();