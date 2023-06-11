import addBlock from "./public/assets/js/utils/addBlock.js";
import Header from "./public/assets/js/components/Header.js";
import Main from "./public/assets/js/components/Main.js";

addBlock('.hero',Header, 'afterbegin' );
addBlock('.hero',Main, 'afterbegin' );
