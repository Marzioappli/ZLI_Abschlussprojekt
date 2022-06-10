const responsiveButton =
document.getElementsByClassName("responsive-button")[0];
const links = document.getElementsByClassName("links")[0];

responsiveButton.addEventListener("click", () => {
links.classList.toggle("active");
});
