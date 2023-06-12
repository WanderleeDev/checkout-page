import addBlock from "./public/assets/js/utils/addBlock.js";
import Header from "./public/assets/js/components/Header.js";
import Main from "./public/assets/js/components/Main.js";

import validity from "./public/assets/js/utils/validity.js";

addBlock('.hero',Header, 'afterbegin' );
addBlock('.hero',Main, 'afterbegin' );


const t = document.querySelectorAll('.question-input');
const f = Array.from(t);

f.map((x) => {

  const paramCommon = x.name; 
  console.log(paramCommon);
  const regex = validity[paramCommon].regex;  
  console.log(x.value);

  x.addEventListener('keyup', ()=>{

    if (regex.test(x.value)) {
      console.log(true);
      x.classList.add('valid')
      x.classList.remove('error');

    }else{
      console.log(false);
      x.classList.remove('valid');
      x.classList.add('error');
    }
  })

})


//t.addEventListener('keyup', (event)=>{
//  if (event.target.name) {
//    validity.validate(t.value, t.type);
//    console.log(event.target.name);
//  }
//})