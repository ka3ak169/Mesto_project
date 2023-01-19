import { Card } from '../components/Card.js';
import { FormValidator } from "../components/FormValidator.js";
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';


const cardsContainer = document.querySelector('.cards');
const profilePopupContainer = document.querySelector('.profile-popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupForm = profilePopupContainer.querySelector(
  '.profile-popup__form'
);
const profilePopupCloseBtn = document.querySelector(
  '.profile-popup__close-button'
);
const profilePopupInputName = profilePopupContainer.querySelector(
  '.profile-popup-name'
);
const profilePopupInputActivity = profilePopupContainer.querySelector(
  '.profile-popup-activity'
);
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const page = document.querySelector('.page');
const cardPopupAddBtn = document.querySelector('.profile__add-button');
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupCloseBtn = cardPopupElement.querySelector(
  '.card-popup__close-button'
);
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup-name');
const cardPopupInputLink = cardPopupElement.querySelector(
  '.card-popup-activity'
);
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');
const imagePopupContainer = document.querySelector('.image-popup');
const imagePopupCloseBtn = imagePopupContainer.querySelector(
  '.image-popup__close-button'
);
const imagePopupLink = imagePopupContainer.querySelector('.image-popup__image');
const imagePopupСaption = imagePopupContainer.querySelector(
  '.image-popup__description'
);
const cardTemplate = '.card-template';

export function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscBtn);
};

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscBtn);
};

function bindPopupOverlayClickHandler(popupName) {
  popupName.addEventListener('mousedown', function (evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    closePopup(popupName);
  });
};

function closePopupEscBtn(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function openProfilePopup() {
  openPopup(profilePopupContainer);
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputActivity.value = profileActivity.textContent;
};

function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = profilePopupInputName.value;
  profileActivity.textContent = profilePopupInputActivity.value;
  closePopup(profilePopupContainer);
};

export const openImagePopup = function (name, link) {
  imagePopupLink.alt = name;
  imagePopupLink.src = link;
  imagePopupСaption.textContent = name;

  openPopup(imagePopupContainer);
};

imagePopupCloseBtn.addEventListener('click', function () {
  closePopup(imagePopupContainer);
});

const cardsData = [
  {
    name: 'Карачаево-Черкессия',
    link: './image/kirill-pershin-1088404-unsplash.png',
  },
  {
    name: 'Милая кошечка Агата',
    link: './image/Агата.jpg',
  },
  {
    name: 'Милый котик Барсик',
    link: './image/Баркик.jpg',
  },
  {
    name: 'Милый котик Борис',
    link: './image/Борис.jpg',
  },
  {
    name: 'Милый котик Рыжик',
    link: './image/Рыжик.jpg',
  },
  {
    name: 'Милый котик Тимоша',
    link: './image/Тимоша.jpg',
  },
];

const renderer = function(item) {
  const card = new Card(item, cardTemplate);
  const cardElement = card.generateCard();
  
  defaultCardList.addItem(cardElement);
}

const defaultCardList = new Section(
  { items: cardsData,
    renderer
  },
  cardsContainer
);

defaultCardList.renderItem();

// // слушатель submit card-popup
const handleAddCardFormSubmit = function (event) {
  event.preventDefault();
  const cardData = {
    name: cardPopupInputPlace.value,
    link: cardPopupInputLink.value,
  };

  renderer(cardData);

  cardPopupFrom.reset();
  cardPopupValiadator.disableSubmitButton();

  closePopup(cardPopupElement);
};

const open = new Popup(profilePopupContainer);

profileEditBtn.addEventListener('click', function () {
  open.open();
});

profilePopupCloseBtn.addEventListener('click', function () {
  open.close();
});

// profileEditBtn.addEventListener('click', function () {
//   openProfilePopup();
// });
// profilePopupCloseBtn.addEventListener('click', function () {
//   closePopup(profilePopupContainer);
// });
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);
cardPopupAddBtn.addEventListener('click', function () {
  openPopup(cardPopupElement);
});
cardPopupCloseBtn.addEventListener('click', function () {
  closePopup(cardPopupElement);
});
cardPopupFrom.addEventListener('submit', handleAddCardFormSubmit);
bindPopupOverlayClickHandler(cardPopupElement);
bindPopupOverlayClickHandler(imagePopupContainer);
bindPopupOverlayClickHandler(profilePopupContainer);
closePopupEscBtn(cardPopupElement);
closePopupEscBtn(imagePopupContainer);
closePopupEscBtn(profilePopupContainer);

const popupData = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  submitBtnInvalid: 'submit-button_invalid',
};

const cardPopupValiadator = new FormValidator(popupData, cardPopupFrom);
const profilePopupValiadator = new FormValidator(popupData, profilePopupForm);

cardPopupValiadator.enableValidation();
profilePopupValiadator.enableValidation();

// const section = new Section('ivan'); 
// section.getName();