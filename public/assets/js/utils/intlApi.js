function formatPrice(number) {
  const options = {
    style: 'currency',
    currency: 'USD'
  }
  const formatNum = new Intl.NumberFormat('en-Us', options);

  return formatNum.format(number);
}

export default formatPrice;