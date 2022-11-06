let gametype = checkGame(prompt("Choose Single or Best of three game"));
let p1Score = 0;
let p2Score = 0;
let result = "";

console.log(gametype);

const Gameround = () => {
    for(i=0;i<gametype;i++){
         
        let user1 = checkValue(prompt("Player 1","ROCK/PAPER/SCISSORS"));
        let user2 = checkValue(prompt("Player 2","ROCK/PAPER/SCISSORS"));        
        playGame(user1,user2);
    }
    result = (p1Score > p2Score)? "Player 1 wins" : (p2Score > p1Score) ? "Player 2 wins" : "Tie"
    console.log(result);
}

function playGame(choice1,choice2){

    if(choice1===choice2){
        p1Score++;
        p2Score++;
    }
    else if(choice1==="ROCK"){
        if(choice2==="SCISSORS"){
            p1Score++;
        }
        else if(choice2==="PAPER"){
            p2Score++;
        }
    }
    else if(choice1==="PAPER"){
        if(choice2==="SCISSORS"){
            p2Score++;
        }
        else if(choice2==="ROCK"){
            p1Score++;
        }
    }
    else if(choice1==="SCISSORS"){
        if(choice2==="PAPER"){
            p1Score++;
        }
        else if(choice2==="ROCK"){
            p2Score++;
        }
    }
    
}

function checkValue(x){

    if(x.toUpperCase() === "ROCK" || x.toUpperCase() === "PAPER" || x.toUpperCase() === "SCISSORS" ){

        return x.toUpperCase();
    }
    else {
        x = checkValue(prompt("","ROCK/PAPER/SCISSORS"));
    }
}  

function checkGame(x){
    if(x === "1" || x === "3"){
        return parseInt(x);
    }
    else{
        x = checkGame(prompt("Choose Single or Best of three game"));
    }

}

 Gameround();