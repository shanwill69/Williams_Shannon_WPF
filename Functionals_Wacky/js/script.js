//Shannon Williams Functionals Wacky July 28, 2014

// How much milk do I need for my cookies?

function gotMilk(){
    var milk = 4;
    var cookies = 1;
    var cupMilk = milk * cookies;
    if(milk < 2){
        console.log("You don't have enough milk for your cookies")

    }
    if(milk >= 2){
        console.log("Nom nom nom")
    }
    console.log("I will need " + cupMilk + " ounces of milk for every two cookies");
}
gotMilk();
