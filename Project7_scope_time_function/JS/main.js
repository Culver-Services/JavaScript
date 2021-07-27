
var x = 10;   //---The variable X was assigned the value 10 outside of our function, but we still accessed it – therefore, the above is an example of a global variable.
function Add_numbers_1() {
    document.write(20 + x + "<br>");                                                //Local & Global varibles
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {      //---the code would only return “30” because the variable was local – meaning it was written within the function Add_numbers_3 and couldn’t be accessed outside of it.
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    console.log (y + 100 + "<br>");                                                 //Console.log error
   
}
Add_numbers_3 ();
Add_numbers_4 ();

function get_Date() {                                                               //Time function
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
