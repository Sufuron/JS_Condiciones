//Desafio Border
const imgClick = document.querySelector(".imgBorder");

imgClick.addEventListener("click", () => {
  if (!imgClick.classList.contains("imgBlueBorder")) {
    imgClick.classList.add("imgBlueBorder");
  } else {
    imgClick.classList.remove("imgBlueBorder");
  }
});