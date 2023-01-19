export class FormValidator {
  constructor(data, formSelector) {
    this._formSelector = formSelector;
    this._inputs = this._formSelector.querySelectorAll(data.input);
    this._submitBtn = this._formSelector.querySelector(data.submitBtn);
    this._submitBtnInvalid = data.submitBtnInvalid;
  };

  _showError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
  };

  _hideError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = "";
  };
  // проверка валидности
  _isValid(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  };

  // слушатель ввода
  _setListeners() {
    const formInputs = Array.from(this._inputs);
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._isValid(input);
        this._setSubmitButtonState(formInputs);
      });
    });
  };
  // объединяет input
  _hasInvalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  };
  // Переключаем кнопку
  _setSubmitButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._submitBtn.setAttribute("disabled", true);
      this._submitBtn.classList.add(this._submitBtnInvalid);
    } else {
      this._submitBtn.removeAttribute("disabled");
      this._submitBtn.classList.remove(this._submitBtnInvalid);
    }
  };

  disableSubmitButton() {
    this._submitBtn.setAttribute("disabled", true);
    this._submitBtn.classList.add(this._submitBtnInvalid);
  };

  enableValidation() {
    this._setListeners();
  };
};
