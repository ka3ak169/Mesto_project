import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._name = this._popupSelector.querySelector(
      '.popup__form-input[name="name"]'
    );
    this._activity = this._popupSelector.querySelector(
      '.popup__form-input[name="activity"]'
    );
    this._form = this._popupSelector.querySelector(".popup__form");
  }

  _getInputValues() {
    return {
      name: this._name.value,
      link: this._activity.value,
    };
  }

  setEventListeners() {
    this._form.addEventListener("input", () => console.log(this._name.value));
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
