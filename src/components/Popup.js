export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
  }
  setEventListeners() {
    const popupClsBtn = this._popupSelector.querySelector(
      ".popup__close-button"
    );

    popupClsBtn.addEventListener("click", () => {
      this.close();
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target !== evt.currentTarget) {
        return;
      }
      this.close();
    });
  }
}
