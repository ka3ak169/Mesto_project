export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    console.log(this._popupSelector);
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    // this.setEventListeners();
    document.addEventListener("keydown", (evt) => { this._handleEscClose(evt) });
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => { this._handleEscClose(evt) });
  }
  _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
  }
  setEventListeners() {
    // this._handleEscClose();
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
