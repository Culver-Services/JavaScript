function final_Function() {
    var Height, Can_final;
    Height = document.getElementById("Height").value;
    Can_final = (Height < 5.0) ? "Too small for college football": "Get ready for tryouts..You're tall enough";  //Greater then 5.0 for height results
    document.getElementById("final").innerHTML = Can_final + " ..it's one of the toughest sports out there";
}

function Total_Score(Offence, Defence) {
    this.Score_Offence = Offence;
    this.Score_Defence = Defence;
}
var Chad = new Total_Score("7.8/12", "3.9/12")    //Chad's score displayed only in index.html
var Kobe = new Total_Score("8.1/12", "8.1/12")

function final2_Function() {
    document.getElementById("final2").innerHTML = "Offensive score " + Chad.Score_Offence + " & Deffensive score " + Chad.Score_Defence + " is the final overall score for football tryouts";
    
}

function count_Function() {
    document.getElementById("Counting").innerHTML = count();
    function count() {
        var Starting_point = 89;
        function Plus_one() {Starting_point += 1;}   
        Plus_one();                                                 //Nested function
        return Starting_point;
    }
}