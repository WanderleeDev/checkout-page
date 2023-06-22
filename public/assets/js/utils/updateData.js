import formatPrice from "./intlApi.js";
import sumPrice from "./sumPrice.js";

export function increaseNumber(element, price, base) {
  const number = parseInt(element.textContent);
  const newNumber = parseFloat(Math.min(number + 1 ,10));
  //actualiza el contador
  element.textContent = newNumber;
  //actualizar el precio
  updatePrice(price, base, newNumber);
}

export function decreaseNumber(element, price, base) {
  const number = parseInt(element.textContent);

  const newNumber = parseFloat(Math.max(number - 1, 0));
  //actualiza el contador
  element.textContent = newNumber;
  //actualizar el precio
  updatePrice(price, base, newNumber)
}

export function updatePrice(toUpdate,baseNumber, dataNumber){
  const data = baseNumber * dataNumber;
  //actualiza el precio y redondea a 2 dígitos
  toUpdate.textContent = formatPrice(parseFloat(data.toFixed(2)));
}

export function totalPrice(elements) {
  const target = document.querySelectorAll(elements);

  target.forEach((t)=>{
    t.addEventListener('click',()=>{
    sumPrice();
    });
  });
}
