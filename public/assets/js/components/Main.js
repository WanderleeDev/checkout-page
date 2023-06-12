import Card from "./Card/Card.js";
import QuestionContainer from "./QuestionContainer/QuestionContainer.js";
import Form from "./Form/Form.js";

const Main = `
  ${Card('https://cdn2.thecatapi.com/images/MTkzNjI1Nw.jpg', 'Vintage Backbag', '$54.99', '$94.99')},
  ${Form()}
  `;

export default Main.trim();