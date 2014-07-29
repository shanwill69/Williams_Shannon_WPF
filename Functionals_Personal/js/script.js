//Shannon Williams Functionals Personal July 28, 2014

//How much money does it take to fill my car

function gasTank(){    //function is called gasTank
    var gasPrice = 3.50;  //price of gas per gallon
    var tankSize = 18;   //tank size in gallons
    var amount = gasPrice + tankSize;  //amount is going to equal the price of the gas times how many gallons my tank holds
    console.log("It will take " + amount + " to fill up my car");
}

gasTank();