export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card__element').cloneNode(true);
    this._image = this._cardTemplate.querySelector('.card__image');
    this._place = this._cardTemplate.querySelector('.card__place');
    this._like = this._cardTemplate.querySelector('.card__like');
    this._trash = this._cardTemplate.querySelector('.card__trash');

  };

  _getTemplate () {
    return this._cardTemplate;
  };

  generateCard () {
    this._cardElement = this._getTemplate();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._place.textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  };

  _cardTrash = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _cardLike = () => {
    this._like.classList.toggle('card__like_active');
  };

  _setEventListeners() {
    this._trash.addEventListener('click', this._cardTrash);
    this._like.addEventListener('click', this._cardLike);
    this._image.addEventListener('click', this._handleCardClick);
  };
};