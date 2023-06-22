const InputSelect = (description, alt, img, err) => {
  const tempContainer = `
  <div class="question">
    <span class="question-title">${description}</span>
    <label for=${alt} class="question-label">
      <img class="question-img"  src=${img} alt="logo ${alt}" loading="lazy">
      <select class="question-input select" name="country" value="false" id=${alt} placeholder="Enter your ${description.toLowerCase()}.." required name=${alt}>
        <option selected class="question-option" value="-select an option-" disabled>-select an option-
        </option>
        <option class="question-option" value="peru">Perú</option>
        <option class="question-option" value="argentina">Argentina</option>
        <option class="question-option" value="chile">Chile</option>
      </select>
      <div class="validityMessage">
        <p class="valid">* Formato válido</p>
        <p class="error">* ${err}</p>
      </div>
    </label>
  </div>
  `;

  return tempContainer.trim();
};

export default InputSelect;