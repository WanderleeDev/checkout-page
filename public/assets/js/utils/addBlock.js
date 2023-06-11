function addBlock(target, content, position = 'beforebegin') {
  
  const elementTarget = document.querySelector(target);

  if(content instanceof HTMLElement){
    elementTarget.insertAdjacentElement(position, content);
  }else if (typeof content === 'string' && content.startsWith('<') && content.endsWith('>')){
    elementTarget.insertAdjacentHTML(position, content);
  }else{
    console.error('Solo se aceptan elementos HTML o HTML en cadenas de texto, las posiciones válidas son : beforeend, beforebegin, afterbegin, afterend');
  }
}

export default addBlock;