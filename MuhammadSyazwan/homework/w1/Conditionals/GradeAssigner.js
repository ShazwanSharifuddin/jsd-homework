// get score
let score = checkScore(prompt("","Insert TestScore"));

/*Grade List
80-100 = A
70-79 = B
60-69 = C
50-59 = D
0 - 49 = F
*/
let grade = (score >=80)? "A":(score >= 70 && score < 80)? "B":(score >= 60 && score < 70)? "C":(score >= 50 && score < 60)? "D":"F";

console.log("Your Grade is " + grade)
function checkScore(x){

    if (isNaN(x)){
        alert("Please enter numeric values only!")
        x = prompt("","Insert TestScore");
    }
    return x;
}