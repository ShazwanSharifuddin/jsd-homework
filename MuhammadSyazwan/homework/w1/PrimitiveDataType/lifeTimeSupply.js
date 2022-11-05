//The Lifetime Supply Calculator

let age = prompt("What is your age?");
let maxage = prompt("How long would you want to live, if you could stay healthy?")
let snackx = prompt("How much do you eat your favorite snack per day?");

//get total number of snack
let totalsum = snackx * 365 * (maxage - age);
console.log("You will need " + totalsum + " to last until the ripe old age of " + maxage);
