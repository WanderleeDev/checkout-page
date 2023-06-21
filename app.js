import addBlock from "./public/assets/js/utils/addBlock.js";
import Header from "./public/assets/js/components/Header.js";
import Main from "./public/assets/js/components/Main.js";
import Footer from "./public/assets/js/components/Footer.js";
import  listenerInputForm  from "./public/assets/js/utils/listenerInputForm.js";
import submitForm from "./public/assets/js/utils/submitForm.js";
import counter from "./public/assets/js/utils/counter.js";


addBlock('.hero',Header, 'afterbegin' );
addBlock('#app',Main, 'afterbegin' );
addBlock('#app',Footer, 'afterend' );

//función para iniciar el contador de la tarjeta de venta
counter();
//Agregar eventos escucha para validar cada input del formulario
listenerInputForm('.question-input');
//Maneja el envió del formulario
submitForm('.form');