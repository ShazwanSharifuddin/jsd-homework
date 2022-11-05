// The Temperature Converter

// Celcius to fahrenheit
let celcius = prompt("key in temperature (\u2103)")
let c2fahrenheit = (celcius * (9/5)) + 32;

console.log(celcius + "\u2103" + " is " + fahrenheit + "\u2109");

// fahrenheit to celcius
let fahrenheit = prompt("Key in temperature (\u2109)");
let f2Celcius = (fahrenheit - 32) * (5/9);

console.log(fahrenheit + "\u2109" + " is " + celcius + "\u2103");