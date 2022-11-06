// Get Age
let age = checkNum(prompt("","Insert Your Age"));

let msg = (age >= 35)?"You can vote AND hold any place in government!":(age >=25)?"You can vote AND run for the Senate!":
(age >= 18)?"You can vote":"You can't vote yet";
console.log(msg);

// check Number
function checkNum(x){
    while(isNaN(x)){
        alert("Please insert numeric value only!!");
        x = prompt("","Insert Your Age");
    }
    
    return Number(x);
}