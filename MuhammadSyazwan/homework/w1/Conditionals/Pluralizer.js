// set Singular noun
let nounS = ["artichoke","bubble","chart",
            "boss","bus","fox",
            "ability","battery","candy",
            "day","play","toy"];

// set Plural noun
let nounP = ["artichokes","bubbles","charts",
            "bosses","buses","foxes",
            "abilities","batteries","candies",
            "days","plays","toys"];

// Get Count Number 
let countnum = checkNum(prompt("Insert Number"));           


let result = (countnum > 1)? nounP : nounS; 

console.log(result);

function checkNum(x){
    if (isNaN(x)){
        alert("Please enter numeric values only!")
        x = checkNum(prompt("Insert Number"));
    }
    return parseInt(x);
}

