let body = document.querySelector("body");
let botonColorMode = document.querySelector(".color-mode");

botonColorMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
})



//---------------------------------------------------------//


var preloader = document.getElementById("preloader");

window.addEventListener("load", function() {
  preloader.style.display = "none";
});
