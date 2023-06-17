const Modal = ()=>{

  const tempContainer = `
  <div class="modal">
    <div class="modal-subContainer">
    <button class="modal-btnClose">
    x
    </button>
    <div class="modal-content">
    <p class="modal-text">Complete o corriga los espacios marcados en el formulario</p>
    </div>
    </div>
  </div>
  `
  return tempContainer.trim()
}

  export default Modal;