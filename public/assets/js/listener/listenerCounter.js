function counter() {
  const numberBox = document.querySelectorAll(".card-productNumber");

  numberBox.forEach(number => {
    const price = number.closest('.card').querySelector(".card-price");
    increaseNumber(number, price);
    decreaseNumber(number, price); 
  });
}

function increaseNumber(targetElement,price) {
  const addBtn = targetElement.closest('.card').querySelector(".card-btnAdd");
  const priceBase = parseFloat(price.textContent);

  addBtn.addEventListener("click", () => {
    const number = parseInt(targetElement.textContent);
    //Aumenta el número
    targetElement.textContent = number+ 1;
    
    //Pone un limite de 10
    if (number === 10) {
      targetElement.textContent = 10;
      return;
    }

    //Actualizar el precio de producto
    const newPrice =  priceBase + parseFloat(price.textContent);
    price.textContent = newPrice.toFixed(2);
  });
}

function decreaseNumber(targetElement, price) {
  const addBtn = targetElement.closest('.card').querySelector(".card-btnMinus");
  const priceBase = parseFloat(price.textContent);

  addBtn.addEventListener("click", () => {
    const number = parseInt(targetElement.textContent);
    //Disminuye el número
    targetElement.textContent = number - 1;

    //Pone un limite de 0
    if (number === 0) {
      targetElement.textContent = 0;
      return;
    }

     //Actualizar el precio de producto
    const newPrice =  parseFloat(price.textContent) - priceBase;
    price.textContent = newPrice.toFixed(2);
  });
}

export default counter;