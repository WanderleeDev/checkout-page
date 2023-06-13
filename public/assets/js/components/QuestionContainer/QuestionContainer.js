const QuestionContainer = (description, alt, img, type, err) => {

  const tempContainer = `
  <div class="question">
    <span class="question-title">${description}</span>
    <label for=${alt} class="question-label">
      <img class="question-img"  src=${img} alt="logo ${alt}" loading="lazy">
      <input id=${alt} class="question-input" type=${type} placeholder="Enter your ${description.toLowerCase()}.." required name=${alt}>
      <div class="validityMessage">
        <p class="valid">* Formato válido</p>
        <p class="error">* ${err}</p>
      </div>
    </label>
  </div>
  `;

  return tempContainer.trim()
}

export default QuestionContainer;