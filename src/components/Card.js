export default class Card {
  constructor(data, templateSelector, handleCardClick, handleSubmitDeletePopup, userId, addLike, deleteLike) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleSubmitDeletePopup = handleSubmitDeletePopup;
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card__element').cloneNode(true);
    this._image = this._cardTemplate.querySelector('.card__image');
    this._place = this._cardTemplate.querySelector('.card__place');
    this._like = this._cardTemplate.querySelector('.card__like');
    this._trash = this._cardTemplate.querySelector('.card__trash');
    this._counter = this._cardTemplate.querySelector('.card__like-counter');
    this._userId = userId;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    console.log(this._data);
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

    if (this._checkLike()) {
      this._like.classList.add('card__like_active');
    } 
    return this._cardElement;
  };

  _checkLike() {
    return this._data.likes.some((item) => { return this._userId === item._id })
  }

  _cardLike = () => {
    if(this._like.classList.contains('card__like_active')) {
      this.deleteClassLike()
    } else {
      this.addClassLike()
    }
  };

  addClassLike() {
    this._addLike(this._data._id);
    this._like.classList.add('card__like_active');
  }

  deleteClassLike() {
    this._deleteLike(this._data._id);
    this._like.classList.remove('card__like_active');   
  }

  getElement() {
    return this.generateCard()
  }

  getNumberLike(number) {
    this._counter.textContent = number;
  }

  getUserId() {
    return this._userId
  }

  deleteTrash() {
    this._trash.remove();
  }

  deleteCard(item) {
    item.remove();
    item = null;
  }

  _setEventListeners() {
    this._trash.addEventListener('click', () => {this._handleSubmitDeletePopup(this._cardElement)});
    this._like.addEventListener('click', this._cardLike);
    this._image.addEventListener('click', this._handleCardClick);
  };
};