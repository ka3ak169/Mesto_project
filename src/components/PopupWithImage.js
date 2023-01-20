import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this.data = data;
  }

  open() {
    const popupOpen = super.open();
    const imagePopupLink = this._popupSelector.querySelector(
      ".image-popup__image"
    );
    const imagePopupСaption = this._popupSelector.querySelector(
      ".image-popup__description"
    );

    imagePopupLink.alt = this.data.name;
    imagePopupLink.src = this.data.link;
    imagePopupСaption.textContent = this.data.name;
  }
}
