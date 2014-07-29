//Shannon Williams Functionals Wacky July 28, 2014

// How much milk do I need for my cookies?

function gotMilk(){
    var milk = 4; //I need 2 ounces of milk for every two cookies
    var cookies = 1;  //how many cookies I have
    var cupMilk = milk * cookies; //ounces of milk times amount of cookies
    if(milk < 2){
        console.log("You don't have enough milk for your cookies")
        //if I don't have enough milk, I can't have cookies
    }
    if(milk >= 2){
        console.log("Nom nom nom")
    }
    console.log("I will need " + cupMilk + " ounces of milk for every two cookies");
}
gotMilk();
