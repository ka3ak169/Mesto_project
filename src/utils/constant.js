export const cardTemplate = '.card-template';
export const cardPopupSelector = '.card-popup';
export const profilePopupSelector = '.profile-popup';
export const imagePopupSelector = '.image-popup';
export const deletePopupSelector = '.deleteCard-popup';
export const avatarPopupSelector = '.avatar-popup';
export const cardsContainer = document.querySelector('.cards');

export const popupData = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  submitBtnInvalid: 'submit-button_invalid',
};

export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-58/',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'babe0c92-1b62-46ea-b207-046cc0a5214b'
  }
};
