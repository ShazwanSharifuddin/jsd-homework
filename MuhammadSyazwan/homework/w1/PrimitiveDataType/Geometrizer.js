//calculate properties of a circle

let radius = prompt("Please key in radius");

// Formula for diameter radius * 2
// Formula for Circumference = diameter * pi

let circumference = (radius*2) * Math.PI;
let area = Math.round(Math.PI * Math.pow(radius,2));

console.log("The circumference is " + Math.round(circumference) +" cm" + "\nThe area is " + area + " cm\xB2");
