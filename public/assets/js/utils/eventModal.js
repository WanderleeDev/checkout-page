
//Manejo de la ventana modal
function eventModal() {
  const modal = document.querySelector('.modal');
  const btnDelete = document.querySelector('modal-btnClose');
  btnDelete.addEventListener('click', () => {
    modal.remove();
  });
}

export default eventModal;