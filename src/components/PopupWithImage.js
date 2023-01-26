import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupLink = this._popupSelector.querySelector(
      ".image-popup__image"
    );
    this._imagePopupСaption = this._popupSelector.querySelector(
      ".image-popup__description"
    );
  }

  open(data) {
    const popupOpen = super.open();
    this._imagePopupLink.alt = data.name;
    this._imagePopupLink.src = data.link;
    this._imagePopupСaption.textContent = data.name;
  }
}
