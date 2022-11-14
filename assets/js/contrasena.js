const passwordOne = document.querySelector("#passOne");
const passwordTwo = document.querySelector("#passTwo");
const passwprdThree = document.querySelector("#passThree");
const messageOut = document.querySelector("#answerMessage");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {

  const selectPassOne = passOne.value;
  const selectPassTwo = passTwo.value;
  const selectPassThree = passThree.value;

  if (
    selectPassOne === "9" &&
    selectPassTwo === "1" &&
    selectPassThree === "1"
  ) {
    messageOut.innerHTML = "Password 1 es correcto ✅";
    messageOut.style.color = "blue";
    return;
  }
  if (
    selectPassOne === "7" &&
    selectPassTwo === "1" &&
    selectPassThree === "4"
  ) {
    messageOut.innerHTML = "Password 2 es correcto ✅";
    messageOut.style.color = "blue";
    return;
  }

  messageOut.innerHTML = "Password incorrecto ❌";
  messageOut.style.color = "red";
  return;
});
