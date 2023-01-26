import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._input = this._popupSelector.querySelectorAll('.popup__form-input');
    // console.log(this._input);
    // console.log(typeof this._input);
    // this._input.forEach((item) => console.log(item.name))

    this._name = this._popupSelector.querySelector(
      '.popup__form-input[name="name"]'
    );
    this._activity = this._popupSelector.querySelector(
      '.popup__form-input[name="activity"]'
    );
  }

  _getInputValues() {
    return {
      name: this._name.value,
      link: this._activity.value,
    };
  }

//  _getInputValues() {
    // return {
      // this._input.forEach((item) => console.log(item.name))
    // };
  // console.log(this)
  // console.log(this._input)
  // this._input.forEach((item) => console.log(item.name))
  // this._input.forEach((item) => console.log(item))
  // }


  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._callback(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
