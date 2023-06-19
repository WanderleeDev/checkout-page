import CardShop from "./CardShop/CardShop.js";
import Form from "./Form/Form.js";
import Modal from "./Modal/Modal.js";

const Main = `
  ${Modal}
  ${CardShop()}
  ${Form()}
  `;

export default Main.trim();