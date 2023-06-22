import addBlock from "./public/assets/js/utils/addBlock.js";
import Header from "./public/assets/js/components/Header.js";
import Main from "./public/assets/js/components/Main.js";
import Footer from "./public/assets/js/components/Footer.js";
import  listenerInputForm  from "./public/assets/js/utils/listenerInputForm.js";
import submitForm from "./public/assets/js/utils/submitForm.js";
import counter from "./public/assets/js/utils/counter.js";
import { totalPrice } from "./public/assets/js/utils/updateData.js";
import validitySelect from "./public/assets/js/utils/validitySelect.js";

//Header agregado
addBlock('.hero',Header, 'afterbegin' );
//Main agregado
addBlock('#app',Main, 'afterbegin' );
//Footer agregado
addBlock('#app',Footer, 'afterend' );

//función para iniciar el contador de la tarjeta de venta
counter();
//actualiza el precio total
totalPrice('.btn');
//Agregar eventos escucha para validar cada input del formulario
listenerInputForm('.question-input');
//valida que el select tenga un valor
validitySelect();
//Maneja el envió del formulario
submitForm('.form');
