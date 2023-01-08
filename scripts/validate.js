const formConfig = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  form: '.popup__form',
  submitBtnInvalid: 'submit-button_invalid',
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
};
// проверка валидности
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// слушатель ввода
const setListeners = (form, config) => {
  const formInputs = Array.from(form.querySelectorAll(config.input));
  const button = form.querySelector(config.submitBtn);
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input);
      setSubmitButtonState(formInputs, button, config);
    });
  });
};

// слушатель submit
const enableValidation = (config) => {
  const formElements = Array.from(document.querySelectorAll(config.form));
  formElements.forEach((form) => {
    setListeners(form, config);
  });
};
// объединяет input
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Переключаем кнопку
const setSubmitButtonState = (inputList, button, config) => {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', true);
    button.classList.add(config.submitBtnInvalid);
  } else {
    button.removeAttribute('disabled');
    button.classList.remove(config.submitBtnInvalid);
  }
}

enableValidation(formConfig);
