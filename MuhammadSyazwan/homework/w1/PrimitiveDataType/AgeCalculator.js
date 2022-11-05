//Get Birth Year

let birthYear1 = checkValidDate(prompt("Insert Birth year","Format(YYYY)"));
let birthYear2 = checkValidDate(prompt("Insert Birth year","Format(YYYY)"));

calculateAge(birthYear1,birthYear2);

function checkValidDate(x){

    if (isNaN(x)){
        alert("Please enter numeric values only!")
        x = prompt("Insert Birth year","Format(YYYY)");
    }
    return x;
}

function calculateAge(y1,y2){
    const date = new Date();
    let currentYear = date.getFullYear();

    y1 = Math.abs(y1 - currentYear);
    y2 = Math.abs(y2 - currentYear);

    console.log("They are either " + y1 + " or " + y2);
}
