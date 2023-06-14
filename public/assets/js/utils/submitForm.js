//import validity from "./validity.js";
import {validateAllInputs} from "./listenerInputForm.js";

function submitForm(targetElement) {
  const element = document.querySelector(targetElement);
  let newData = null;

  element.addEventListener('click', (event)  => {
    event.preventDefault();
    const newTarget = event.target; 

    if (newTarget.type === 'submit') {
      return newData = validateAllInputs('.question-input');
    }
    console.log(newData);
  });
}

export default submitForm;