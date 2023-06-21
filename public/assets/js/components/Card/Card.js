import formatPrice from "../../utils/intlApi.js";

const Card = ( img, title, price, previousPrice ) => {

  const tempContainer = `
  <div class="card">
    <div class="card-containerImg">
      <img class="card-img" src=${img} alt=${title}>
    </div>
    <div class="card-info">
      <div class="card-dataProduct">
        <h3 class="card-title">${title}</h3>
        <span class="card-price">${formatPrice(price)}</span>
        <span class="card-previousPrice">${formatPrice(previousPrice)}</span>
      </div>

      <div class="card-containerBtn">
        <button class="card-btnMinus">-</button>
        <span class="card-productNumber">1</span>
        <button class="card-btnAdd" >+</button>
      </div>
    </div>
  </div>
  `;

  return tempContainer.trim()
}

export default Card;