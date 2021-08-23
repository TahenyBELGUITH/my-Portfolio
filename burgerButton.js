//humburger button
//Access to element
const humburger = document.getElementById("humburger");
const myLinks = document.getElementById("links");
const closeBtn = document.getElementById("close");

//Add functions
function openmenu() {
  myLinks.classList.add("overlay");
  myLinks.style.display = "block";
}
function closemenu() {
  myLinks.classList.remove("overlay");
  myLinks.style.display = "none";
}

//Add event listners
humburger.addEventListener("click", openmenu);
closeBtn.addEventListener("click", closemenu);
myLinks.addEventListener("click", closemenu);
