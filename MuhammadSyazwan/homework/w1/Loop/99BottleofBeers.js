let bottles;
let bottles2;

for(i = 99; i >= 1; i--){
    if(i == 1){
        bottles = "bottle";
        bottles2 = "No bottles of beer on the wall!";        
    }
    else {
        bottles = "bottles";
        bottles2 = i - 1 + " bottles of beer on the wall!";
    }
    console.log(`${i}  ${bottles} of beer on the wall,\n${i}  ${bottles} of beer,\nTake one down, pass it around,\n${bottles2});  `)
    }
