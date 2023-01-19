export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    this._handleEscClose();
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');

  }

  _handleEscClose() {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.close()
      }   
    })
  }

  setEventListeners() {
    const popupClsBtn = this._popupSelector.querySelector('.popupCloseBtn');
    popupClsBtn.addEventListener('click', () => this.close());
  }
}