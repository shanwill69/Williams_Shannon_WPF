//Shannon Williams July 23, 2014 Conditionals

//I will work for myself if I make good enough grades

var goodGrades = 72;
var averageGrades = 79;
var badGrades = 60;

//if I make outstanding grades, I will work for a big company
if(goodGrades > averageGrades){
    console.log("Microsoft, here I come!");
//if I do "okay", then I will work for myself on the side
}else if(goodGrades > badGrades){
    console.log("Start my own company");
//if I fail miserably...yikes!
}else{
    console.log ("Do you want fries with that?");
}