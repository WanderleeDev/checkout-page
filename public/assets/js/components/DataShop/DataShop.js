import formatPrice from "../../utils/intlApi.js";

const DataShop = (data, price, newClass = "") => {

  const tempContainer = `
    <div class="dataShop">
      <span class="dataShop-info">${data}</span>
      <span class="dataShop-previousPrice ${newClass}">${formatPrice(price)}</span>
    </div>
  `;

  return tempContainer.trim();
} 

export default DataShop;
