function validitySelect() {
  const select = document.querySelector('.select');

select.addEventListener('change',()=>{
    let sibling =select.nextElementSibling;
    const valid = sibling.querySelector('.valid');
    const err = sibling.querySelector('.error');
  
    if(select.value === '-select an option-'){
      valid.classList.add('hidden');
      err.classList.add('appear');
    }else{
      select.style.color='black';
      valid.classList.add('appear');
      err.classList.add('hidden');
    }
  });
}

export default validitySelect;