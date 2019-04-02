// using this file is optional
// you can also load the code snippets in using your browser's console
console.log("Reached doc");

const main = document.getElementById("main");

main.addEventListener("click", function(event) {
  alert("I was clicked");
});

const divs = document.querySelectorAll("div");

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + " bubbled");
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", bubble);
}
