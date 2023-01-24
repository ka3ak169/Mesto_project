import kirillPershin from '../image/kirill-pershin-1088404-unsplash.png';
import agata from '../image/Агата.jpg';
import barsik from '../image/Баркик.jpg';
import boris from '../image/Борис.jpg';
import rizhik from '../image/Рыжик.jpg';
import timosha from '../image/Тимоша.jpg';

export const cardTemplate = '.card-template';
export const cardsContainer = document.querySelector('.cards');
export const cardsData = [
  {
    name: 'Карачаево-Черкессия',
    link: kirillPershin,
  },
  {
    name: 'Милая кошечка Агата',
    link: agata,
  },
  {
    name: 'Милый котик Барсик',
    link: barsik,
  },
  {
    name: 'Милый котик Борис',
    link: boris,
  },
  {
    name: 'Милый котик Рыжик',
    link: rizhik,
  },
  {
    name: 'Милый котик Тимоша',
    link: timosha,
  },
];

export const popupData = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  submitBtnInvalid: 'submit-button_invalid',
};
