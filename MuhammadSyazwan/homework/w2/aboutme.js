let bodyA = document.querySelector("body");
bodyA.style.fontFamily= "Arial,sans-serif";

let spanA = document.querySelectorAll("li span")[0];
let spanB = document.querySelectorAll("li span")[1];
let spanC = document.querySelectorAll("li span")[2];

spanA.innerHTML = "Shaz";
spanB.innerHTML = "Golfing";
spanC.innerHTML = "Kuala Lumpur";


var nodes = document.querySelectorAll("ul li");

var divNode = document.createElement("style");
divNode.innerHTML = "li { color: red; }";
document.head.appendChild(divNode);

// loop through all of the nodes
for (var i = 0; i < nodes.length; i++) {
  // set the style
  nodes[i].setAttribute("class","list-item")
  console.log(nodes[i]);
}

let img = document.createElement("img")
document.body.appendChild(img);
img.setAttribute("width", "10%")
img.setAttribute("src","https://picsum.photos/400/500");
