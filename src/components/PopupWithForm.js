import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._input = this._popupSelector.querySelectorAll('.popup__form-input');
  }

 _getInputValues() {    
    this._formValues = { };
    this._input.forEach((input) =>  this._formValues[input.name] = input.value);
    return this._formValues;
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
