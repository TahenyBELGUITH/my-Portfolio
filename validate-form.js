const form = document.getElementById("form");
const Email = document.getElementById("mail");
const ErrorMsg = document.getElementById("invalid");

form.addEventListener("submit", (event) => {
  if (Email.value.toLowerCase() !== Email.value) {
    event.preventDefault();
    ErrorMsg.style.color = "white";
    ErrorMsg.style.fontSize = "14px";
    ErrorMsg.style.fontWeight = "300";
    ErrorMsg.style.width = "100%";
    ErrorMsg.style.marginLeft = "98px";
    ErrorMsg.textContent = "please only lower case letters are accepted!";
  }
});
