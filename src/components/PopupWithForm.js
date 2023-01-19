import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
  }

  _getInputValues() {

  }

  setEventListeners() {

  }

  close() {

  }

}