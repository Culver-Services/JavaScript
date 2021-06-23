function my_dictionary() {
    var Animal = {
        species:"dog",
        color:"black",
        breed:"labadour",
        age:5,
        Sound:"bark!"
    };
    delete Animal.Sound;                        //Delete animal sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}