import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    // console.log(this._popupSelector)
    this._name = this._popupSelector.querySelector('.popup__form-input[name="name"]');
    this._activity = this._popupSelector.querySelector('.popup__form-input[name="activity"]');
    this._form = this._popupSelector.querySelector('.popup__form');
    // console.log(this._profileName, this._profileActivity, this._form )
  }

  _getInputValues() {
    return {
      name: this._name.value,
      link: this._activity.value
    }
  }

  setEventListeners() {

    this._form.addEventListener('input', () => console.log(this._name.value));
    console.log(this._name.value)
    this._form.addEventListener('submit', (evt)=> {
      evt.preventDefault();
      console.log(this._getInputValues());
      this._callback(this._getInputValues());
      this.close();
    })
  }

  // close() {
  //   const close = super.close()
  //   return
  //   this._form.reset()
  // }

}