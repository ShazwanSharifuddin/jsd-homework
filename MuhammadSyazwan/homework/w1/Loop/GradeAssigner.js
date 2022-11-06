/*Grade List
80-100 = A
70-79 = B
60-69 = C
50-59 = D
0 - 49 = F
*/
for(i=60; i <= 100;i++){
    let grade = (i >=80)? "A":(i >= 70 && i < 80)? "B":(i >= 60 && i < 70)? "C":(i >= 50 && i < 60)? "D":"F";
    console.log(`For ${i}, you got a ${grade}`);
}


