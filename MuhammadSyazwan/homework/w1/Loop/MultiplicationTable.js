// Multiplication Table

let mtable = [];

for(let i=1; i < 13;i++){
    for(let j=1; j<13;j++){
        mtable.push(`${i} * ${j} is ${i*j}`);
    }
}

console.log(mtable);