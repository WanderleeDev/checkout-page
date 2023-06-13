const DataShop = (data) => {

  const tempContainer = `
    <div class="dataShop">
      <span class="dataShop-info">${data}</span>
      <span class="dataShop-previousPrice">0</span>
    </div>
  `;

  return tempContainer.trim();
} 

export default DataShop;
