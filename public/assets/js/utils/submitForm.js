import { validateAllInputs } from "./listenerInputForm.js";
import addBlock from "./addBlock.js";
import Modal from "../components/Modal/Modal.js";

async function submitForm(targetElement) {
  const formTag = document.querySelector(targetElement);
  let newData = null;

  await new Promise((resolve, reject) => {
    formTag.addEventListener('click', async (event) => {
      event.preventDefault();

      if (event.target.type === 'submit') {
        try {
          newData = await validateAllInputs('.question-input');
          resolve(); 
        } catch (error) {
          reject(error);
        }
      }

      if (newData) {

        console.log(true);  
      }else{
        console.log(false);
      }

    });
  });

  return newData; // Devuelve el valor de newData
}

export default submitForm;

