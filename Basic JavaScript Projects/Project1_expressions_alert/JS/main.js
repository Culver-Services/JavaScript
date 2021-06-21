
window.alert("Hello, world!");

document.write('Hello, world!');

var A = "This is a string,";
document.write(A);

document.write("Be who you want to be,"
+ "because those who mind don\'t matter and those who matter don\'t mind.\""
+ " Dr. Seuss");

var B = "Concatenated" + " String"
document.write(B)

var family ="The arezzinins", dad = "Jeremiah", mom = "hermonie",
daughter = "Penny", son = "zorro";
document.write(dad)

var blues = "I have the blues";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(87 + 54);

function My_First_Function() {          //Defining a function and naming it
    var str = "THis text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}