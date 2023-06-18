import addBlock from "./addBlock.js";
import Modal from "../components/Modal/Modal.js";
import eventModal from "./eventModal.js";
eventModal

//verifica que las propiedades de un objeto sean true
function checkObject(object) {
  
  for (const key in object) {
    if (!object[key]) {
      return false;
    }
  }
  return true;
}


//renderiza una ventana modal con un mensaje personalizado dependiendo si es true o false
function conditionalRender(obj) {
  const isValid = checkObject(obj);
  const invalidMsn = 'Complete o corriga los espacios marcados en el formulario';
  const validMsn = 'Registro exitoso';

  if (isValid) {
    addBlock('#app',Modal(validMsn), 'afterbegin' );
    eventModal();
  }else{
    addBlock('#app',Modal(invalidMsn), 'afterbegin' );
    eventModal();
  }
  
}

export default conditionalRender