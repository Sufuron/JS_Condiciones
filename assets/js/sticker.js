//Desafio Sticker

const stickerOne = document.querySelector("#stickerI1");
const stickerTwo = document.querySelector("#stickerI2");
const stickerThree = document.querySelector("#stickerI3");
const totalSticker = document.querySelector("#totalSticker");
const warning = document.querySelector(".warning");
const stickerButton = document.querySelector(".stickerButton");

stickerButton.addEventListener("click", () => {
  const inputOne = Number(stickerOne.value);
  const inputTwo = Number(stickerTwo.value);
  const inputThree = Number(stickerThree.value);
  const inputValueTotal = inputOne + inputTwo + inputThree;

  //console.log("click");

  if (
    stickerOne.value >= 1 &&
    stickerTwo.value >= 1 &&
    stickerThree.value >= 1 
  ) {
    totalSticker.textContent = inputValueTotal;
  }

  inputValueTotal > 10 >= 1
  ? warning.classList.remove("hidden")
  : warning.classList.add("hidden");
});
