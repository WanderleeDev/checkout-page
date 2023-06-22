import formatData from "./formatData.js";
import formatPrice from "./intlApi.js";

const  sumPrice = () => {
  const data =  document.querySelectorAll('.card-price');
  const target = document.querySelector('.totalPrice');
  const shipping =formatData(document.querySelector('.shipping').textContent);

  const sum = Array.from(data).reduce((accumulator, value) => {
    const number = formatData(value.textContent);
    return accumulator + number
  }, 0);

  const total = parseFloat((sum  + shipping).toFixed(2));
  target.textContent =  formatPrice(total);
}

export default sumPrice;