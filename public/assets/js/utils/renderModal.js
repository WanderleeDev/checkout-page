
import eventModal from "./eventModal.js";

//verifica que las propiedades de un objeto sean true
function checkObject(object) {
  
  for (const key in object) {
    if (!object[key]) {
      return false;
    }
  }
  return true;
}


//verifica que el objeto tenga las propiedades requeridas para mostrar la ventana modal.
//si no, muestra la ventana modal con el mensaje personalizado.
//si si, muestra la ventana modal con el mensaje de registro exitoso.
function conditionalRender(obj) {
  
  const isValid = checkObject(obj);
  const modal =  document.querySelector('.modal');
  const invalidMsn = 'Complete o corrija los espacios marcados en el formulario';
  const validMsn = 'Registro exitoso';

  if (isValid) {
    modal.classList.add('show');
    eventModal(modal, validMsn);
  }else{
    modal.classList.add('show');
    eventModal(modal, invalidMsn);
  }
  
}

export default conditionalRender