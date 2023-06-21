// recibe una cadena de string que sea un numero con el signo de dólar , retira el signo y lo devuelve como un número flotante

function formatData(data) {
  const formattedData = data.replace('$','');

  return parseFloat(parseFloat(formattedData).toFixed(2)); 
}

export default formatData