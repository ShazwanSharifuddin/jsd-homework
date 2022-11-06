//Get Par Index
let par = checkNum(prompt("","Insert Par Index"),1);
let score = checkNum(prompt("","Insert Score"),2);
let diff = score - par;

let result = 
(score === 1)?"Hole in one":(diff === -1)?"Birdie":(diff === -2)?"Eagle":
(diff === 0)?"Par":(diff === 1)?"Bogey":(diff === 2)?"Double Bogey":(diff > 2)?"Not Sure":"Invalid Score";

console.log(result);


function checkNum(x,y){
    while(isNaN(x)){
        alert("Please insert numeric value only!!");
        if(y === 1){
            x = checkNum(prompt("","Insert Par Index"),1);
        }
        else{
            x = checkNum(prompt("","Insert Score"),2);
        }
      
    }
    return Number(x);
}