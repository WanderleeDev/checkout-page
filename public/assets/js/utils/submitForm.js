import { validateAllInputs } from "./listenerInputForm.js";
import conditionalRender from "./renderModal.js";

async function submitForm(targetElement) {
  const formTag = document.querySelector(targetElement);
  let newData = null;

  await new Promise((resolve, reject) => {
    formTag.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        if (event.target.type === 'submit') {
            newData = await validateAllInputs('.question-input');
            conditionalRender(newData);
            resolve(); 
        }
      } catch (error) {
          reject(error);
      }
    });
  });
  return newData; // Devuelve el valor de newData
}

export default submitForm;