//Shannon Williams July 23, 2014 Conditionals

//If I lose 10 pounds, I will buy a new shirt

var weightLoss =10; //tells how much weight is lost
var weightGain = 2; //tells how much weight is gained

//if I lose more weight than I gain, I can buy a shirt
if(weightLoss > weightGain){
    console.log("Good Girl! Time to shop!");
}


//if I gain more weight than I lose, I have to do sit-ups
if (weightGain > weightLoss){
    console.log("Drop and give me 20!");
}

var userInput = prompt("Are you serious about losing weight?");
if (userInput ===""){
    userInput = prompt("Are you serious about losing weight?")
}