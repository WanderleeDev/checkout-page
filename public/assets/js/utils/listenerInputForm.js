import validity from "./validity.js";

function listenerInputForm(elementTarget) {
  
  const inputs = document.querySelectorAll(elementTarget);
  
  Array.from(inputs).map((input)=>{

    input.addEventListener('keyup', ()=>{
      validity.validate(input, input.name);
    });
  });
}

export default listenerInputForm
