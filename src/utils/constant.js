import kirillPershin from '../image/kirill-pershin-1088404-unsplash.png';
import agata from '../image/Агата.jpg';
import barsik from '../image/Баркик.jpg';
import boris from '../image/Борис.jpg';
import rizhik from '../image/Рыжик.jpg';
import timosha from '../image/Тимоша.jpg';

export const cardTemplate = '.card-template';
export const cardPopupSelector = '.card-popup';
export const profilePopupSelector = '.profile-popup';
export const imagePopupSelector = '.image-popup';
export const deletePopupSelector = '.deleteCard-popup';

export const cardsContainer = document.querySelector('.cards');
export const cardsData = [
  {
    name: 'Карачаево-Черкессия',
    link: kirillPershin,
  },
  {
    name: 'Кошечка Агата',
    link: agata,
  },
  {
    name: 'Котик Барсик',
    link: barsik,
  },
  {
    name: 'Котик Борис',
    link: boris,
  },
  {
    name: 'Котик Рыжик',
    link: rizhik,
  },
  {
    name: 'Котик Тимоша',
    link: timosha,
  },
];

export const popupData = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  submitBtnInvalid: 'submit-button_invalid',
};
