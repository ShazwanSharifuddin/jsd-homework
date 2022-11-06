//Get Par Index

let diff;
const ranNum = getRandomNum();

for(i=3;i<=5;i++){
    for(j=1;j<=8;j++){
        diff = j - i;
        let result = 
            (j === 1)?"Hole in one":(diff === -1)?"Birdie":(diff === -2)?"Eagle":(diff === -3 && i === 5)?"Eagle":
            (diff === 0)?"Par":(diff === 1)?"Bogey":(diff === 2)?"Double Bogey":(diff > 2)?"Not Sure":"Invalid Score";
       
        if(ranNum === i){
            console.log(`Par ${i} Score ${j} ${result}`);
        }
       
    }
}

// Get random Par
function getRandomNum() { // min and max included 
    return Math.floor(Math.random() * (5 - 3 + 1) + 3)
  }
   
 



