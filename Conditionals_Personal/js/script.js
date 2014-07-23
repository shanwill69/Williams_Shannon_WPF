//Shannon Williams July 23, 2014 Conditionals

//Will my son get a reward for his grades?

var testScore = 91; //if he gets good grades he will get a reward
var reward;

//if his grade is greater than or equal to 90, he can shop
reward = (testScore >= 90) ? "Shop for a toy!" : "Study more!";
console.log(reward);


var goodBoy = prompt("How are your grades?");
if(goodBoy ===""){
    goodBoy = prompt("Tell the truth!");
}


