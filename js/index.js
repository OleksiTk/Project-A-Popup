var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.querySelector(".bubbly-button");
let bodyNotifation = document.querySelector(".popup");
let okButton = document.querySelector(".popup__button");

bubblyButtons.addEventListener("click", (e) => {
  animateButton(e);
  setTimeout(showNotifation, 700);
});

function showNotifation() {
  bubblyButtons.style.display = "none";
  bodyNotifation.style.display = "block";
}

okButton.addEventListener("click", noneNotifation);

function noneNotifation() {
  bubblyButtons.style.display = "inline-block";
  bodyNotifation.style.display = "none";
}
