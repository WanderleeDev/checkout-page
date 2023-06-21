import Card from "../Card/Card.js";
import product from "./product.js";
import DataShop from "../DataShop/DataShop.js";

const CardShop = () => {

  const tempContainer = `
  <div class="cardShop">
    <div class="cardShop-subSection">
      ${
        product.map((p) => {
          const {name, price, previousPrice, img} = p;

          return(`
            ${Card(img, name, price, previousPrice)}
          `)
        }).join('')
      }
    </div>
    <div class="cardShop-subSection">
      ${
        [DataShop('Shipping',19, 'shipping'), 
        DataShop('Total',0, 'totalPrice')].join('')
      }
    </div>
  </div>
  `;

  return tempContainer.trim();
}

export default CardShop;