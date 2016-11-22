// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var rps = ["rock","paper","scissor"];
   
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var math= Math.floor(Math.random() * 3) + 0;

    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
   var result=rps[math];
   
    // Task 1, Step 4: return this new value
    return result;
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
$(document).ready(function() {
var pickWinner = function (userChoice, computerChoice) {
    
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
if (userChoice==computerChoice){
 result="draw";
 console.log(result);
} else if (userChoice=="rock" && computerChoice=="paper"){
    result="computer wins";
    console.log(result);
} else if (userChoice=="rock"&& computerChoice=="scissors"){
    result="user wins";
    console.log(result);
} else if (userChoice=="paper" && computerChoice=="scissors"){
    result="computer wins";
    console.log(result);
} else if (userChoice=="paper" && computerChoice=="rock"){
    result="user wins";
    console.log(result);
} else if (userChoice=="scissors" && computerChoice=="paper"){
    result="user wins";
    console.log(result);
} else if (userChoice=="scissors" && computerChoice=="rock"){
    result="computer wins";
    console.log(result);
    
}
return result 
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};


/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */


    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
   
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the 
    // value based on the item the user clicks on the HTML page.
$(".choice").click(function(){
    var computerChoice = generateComputerChoice();
    var userChoice = $(this).text();
    $("#computer-choice").text(computerChoice); 
    var result= pickWinner(userChoice, computerChoice); 
   $("#winner").text(result);
});
    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
   

});