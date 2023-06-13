function submitForm(targetElement) {
  
  const element = document.querySelector(targetElement);

  element.addEventListener('submit', (event)  => {

    event.preventDefault();

    const newTarget = event.target; 

    console.log(newTarget);

    if (newTarget.matches('.BtnContainer-submit')) {
      console.log('check');
    }
  });
}

export default submitForm;