//Manejo de la ventana modal
function eventModal(target, msn) {
  const btn = target.querySelector('.modal-btnClose');
  const textBox = target.querySelector('.modal-text');
  textBox.textContent = msn;

  btn.addEventListener('click', () => {
    target.classList.remove('show');
  });
}

export default eventModal;