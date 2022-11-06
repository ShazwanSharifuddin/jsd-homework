
let language = prompt("","Language");

// Language selection

let result = (language.toUpperCase() === "ENGLISH")? "Hello World":(language.toUpperCase() === "MALAY")?"Hai Dunia":
(language.toUpperCase() === "FRENCH")?"Bonjour le monde":(language.toUpperCase() === "KOREAN")?"안녕하세요 세계":"Language not available!";

console.log(result);

