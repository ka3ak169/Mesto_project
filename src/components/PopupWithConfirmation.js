import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupSelector.querySelector(".popup__form");
    // console.log(this)
  }

  handleSubmit() {
    // console.log(this);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // console.log(this);
      // this._callback();
      this.close();
    });
  }

  // getid(obj) {
  //   // console.log(obj);
  //   console.log(this);
  // }


  
}