import { decreaseNumber, increaseNumber } from "./updateData.js";
import formatData from "./formatData.js";

function counter() {
  const numberBox = document.querySelectorAll(".card-productNumber");

  numberBox.forEach(number => {
    const card = number.closest('.card');
    const btnAdd = card.querySelector(".card-btnAdd");
    const btnSubtract = card.querySelector(".card-btnMinus");
    const price = card.querySelector(".card-price");
    const priceBase = formatData(price.textContent);

    btnAdd.addEventListener('click' ,() => {
      increaseNumber(number, price, priceBase);
    });

    btnSubtract.addEventListener('click', () => {
      decreaseNumber(number, price, priceBase);
    })
  });
}



export default counter;