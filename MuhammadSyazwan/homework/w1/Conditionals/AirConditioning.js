//get Current Temp
let currtemp = checkNum(prompt("Current Temperature","Insert Temperature"));
let temp = checkNum(prompt("Desired Temperature","Insert Temperature"));

//return boolean
let workingAC = checkValue(prompt("Is A/C working (Y/N)"));

let result = (!workingAC)?"Turn on the A/C Please":
(currtemp > temp)?"Fix the A/C now! It's hot!":"Fix the A/C whenever you have the chance ... It's cool..";

console.log(result);
function checkValue (x){
    x = x.toUpperCase();
    while (x !== "Y" && x !=="N") {
        x = prompt("Is AC working (Y/N)");
    }
    if(x === "Y"){
        return true;
    }
    else{
        return false;
    }
}

function checkNum(x){
    while(isNaN(x)){
        alert("Please insert numeric value only!!");
        x = prompt("","Insert Temperature");
    }
    
    return Number(x);
}
