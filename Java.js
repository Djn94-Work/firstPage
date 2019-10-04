const modal = document.getElementById("myModal");

const button = document.getElementById("contact");

const span = document.getElementsByClassName("close")[0];
console.log(modal);
console.log(button);
console.log(span);
button.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
