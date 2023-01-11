import { openImagePopup } from './index.js'

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  };

  _getTemplate () {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card__element').cloneNode(true);
    return cardElement;
  };

  generateCard () {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardElement.querySelector('.card__image').src = this._link;
    this._cardElement.querySelector('.card__image').alt = this._name;
    this._cardElement.querySelector('.card__place').textContent = this._name;
    
    return this._cardElement;
  };

  _cardTrash = () => {
    this._cardElement.remove();
  };

  _cardLike = () => {
    this._cardElement.querySelector('.card__like').classList.toggle('card__like_active');
  };

  _openCardPopup = () => {
    openImagePopup(this._name, this._link);
  };

  _setEventListeners() {
    this._cardElement.querySelector('.card__trash').addEventListener('click', this._cardTrash);
    this._cardElement.querySelector('.card__like').addEventListener('click', this._cardLike);
    this._cardElement.querySelector('.card__image').addEventListener('click', this._openCardPopup);
  };
};