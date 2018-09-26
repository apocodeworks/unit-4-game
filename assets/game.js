var wins = 0
var losses = 0
var guessNumber = 1
var score = 0
var diamond = 0
var ruby = 0
var sapphire =0 
var emerald = 0


    function scoreChanger() {

        $("#score").text(score);
    }

    function winTracker() {

        if (guessNumber === score) {

            wins++;
            $("#wins").text(wins);

            // set new gem values 
    
            diamond = Math.floor(Math.random() * 10) + 10;
            ruby = Math.floor(Math.random() * 5) + 5;
            sapphire = Math.floor(Math.random() * 3) + 3;
            emerald = Math.floor(Math.random() * 1) + 1;
            console.log(diamond)
            console.log(ruby)
            console.log(sapphire)
            console.log(emerald)

            // Set new guess value 

            guessNumber = Math.floor(Math.random() * 120  + 30);
            $("#guessValue").text(guessNumber);

            // Set score to 0

            score = 0;
            $("#score").text(score);

        } else if (score > guessNumber) {
            losses++;
            $("#losses").text(losses);

            // set new gem values 
    
            diamond = Math.floor(Math.random() * 10) + 10;
            ruby = Math.floor(Math.random() * 5) + 5;
            sapphire = Math.floor(Math.random() * 3) + 3;
            emerald = Math.floor(Math.random() * 1) + 1;
            console.log(diamond)
            console.log(ruby)
            console.log(sapphire)
            console.log(emerald)

            // Set new guess value 

            guessNumber = Math.floor(Math.random() * 120  + 30);
            $("#guessValue").text(guessNumber);

            // set score to 0;

            score = 0;
            $("#score").text(score);

        }
    }


    $( document ).ready(function() {
        console.log( "ready!" );

    // set new gem values 

    diamond = Math.floor(Math.random() * 10) + 10;
    ruby = Math.floor(Math.random() * 5) + 5;
    sapphire = Math.floor(Math.random() * 3) + 3;
    emerald = Math.floor(Math.random() * 1) + 1;
    console.log(diamond)
    console.log(ruby)
    console.log(sapphire)
    console.log(emerald)

    // Set new guess value 

    guessNumber = Math.floor(Math.random() * 120  + 30);
    $("#guessValue").text(guessNumber);
    });
    



$("#diamond").on("click", function() {

    score += diamond;
    console.log(score);
    scoreChanger();
    winTracker();

})

$("#sapphire").on("click", function() {

    score += sapphire;
    console.log(score);
    scoreChanger();
    winTracker();

})

$("#emerald").on("click", function() {

    score += emerald;
    console.log(score);
    scoreChanger();
    winTracker();

})

$("#ruby").on("click", function() {

    score += ruby;
    console.log(score);
    scoreChanger();
    winTracker();
})

