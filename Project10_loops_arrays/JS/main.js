var Instruments = ["Guitar", "Drums", "Piano" , "Bass", "Violin", "Trumpet", "Fireworks"];          //For loop
var Content = "";                           
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}



function cat_pics() {                               //Array function
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this scenario, the cat is " +
        Cat_Picture[0] + ".";
}

function car_Object() {
let car = {                 //Let object
    make: "Mazda ",
    model: "3 ",
    year: "2021 ",
    color: "green ",
    description: function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}



function count_To_Ten() {                   //While loop
    var Digit = "";
    var z = 1;
    while (z < 11) {
        Digit += "<br>" + z;
        z++
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}