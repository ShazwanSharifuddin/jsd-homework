// Get User Message
let msg = prompt("","Insert Message");
let msgEnd = msg.slice(-1);

let result = (msgEnd === "?")?"Sure.":(msg === '' || hasWhiteSpace(msg))?"Fine, be that way!":
    (isUpperCase(msg))?"Woah, chill out!":"Whatever.";
console.log(result);


function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }

function isUpperCase(s) {
    return (/^[^a-z]*$/).test(s);
  }

