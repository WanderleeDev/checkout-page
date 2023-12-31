import dataInput from "../QuestionContainer/dataInput.js";
import QuestionContainer from "../QuestionContainer/QuestionContainer.js";
import Btn from "../Btn/Btn.js";
import InputSelect from "../InputSelect/ImputSelect.js";

const Form = () =>{

  const tempContainer = `
  <form class="form" autocomplete="off" method="post" action="/ruta-de-destino">
    <fieldset class="form-subsection">
      <legend class="form-subTitle">Contact infomation</legend>
      ${
        dataInput.slice(0,2).map((data)=> {
          const {img, alt, type, description, err} = data;
          
          return(`
            ${QuestionContainer(description,alt,img,type,err)}
          `)
        }).join('')
      }
    </fieldset>
    <fieldset class="form-subsection">
    <legend class="form-subTitle">Shipping address</legend>
    ${
      dataInput.slice(2,5).map((data)=> {
        const {img, alt, type, description, err} = data;
        
        return(`
          ${QuestionContainer(description,alt,img,type,err)}
        `)
      }).join('')
    }
    <div class="subContainer">
      ${
        dataInput.slice(5,6).map((data)=> {
          const {img, alt, type, description, err} = data;
          
          return(`
            ${InputSelect(description,alt,img,err)}
          `)
        }).join('')
      }

      ${
      dataInput.slice(6).map((data)=> {
        const {img, alt, type, description, err} = data;
        
        return(`
          ${QuestionContainer(description,alt,img,type,err)}
        `)
      }).join('')
      }
    </div>
    <div class="form-containerCheck paddingTop--1rem">
      <input class="form-checkbox" type="checkbox" name="saveData" id="saveData" value="true">
      <label for="saveData" class="form-checkboxInfo" for="">Save this information for next time</label>
    </div>
    ${Btn}
    </fieldset>
  </form>
  `;

  return tempContainer.trim();
}

export default Form