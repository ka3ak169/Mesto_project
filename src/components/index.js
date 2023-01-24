import Card from './Card.js';
import FormValidator from "./FormValidator.js";
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import {
  cardTemplate,
  cardsContainer,
} from '../utils/constant.js';




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

// const profileName = '.profile__name';
// const profileActivity = '.profile__activity';




const page = document.querySelector('.page');
// page.addEventListener('click', (evt) => {console.log(evt.target, evt.currentTarget)});

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
const imagePopupСaption = imagePopupContainer.querySelector('.image-popup__description');



// export function openPopup(popupName) {
//   popupName.classList.add('popup_opened');
//   // document.addEventListener('keydown', closePopupEscBtn);
// };

// function closePopup(popupName) {
//   popupName.classList.remove('popup_opened');
//   // document.removeEventListener('keydown', closePopupEscBtn);
// };

// function bindPopupOverlayClickHandler(popupName) {
//   popupName.addEventListener('mousedown', function (evt) {
//     if (evt.target !== evt.currentTarget) {
//       return;
//     }
//     closePopup(popupName);
//   });
// };

// function closePopupEscBtn(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };





// export const openImagePopup = function (name, link) {
//   imagePopupLink.alt = name;
//   imagePopupLink.src = link;
//   imagePopupСaption.textContent = name;

//   openPopup(imagePopupContainer);
// };


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

const handleCardClick = function(data) {
  const imagePopup = new PopupWithImage(imagePopupContainer, data);
  imagePopup.open();
};

const renderer = function(item) {
  const card = new Card(item, cardTemplate, () => { handleCardClick(item) } );
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


// image Popup
const imagePopup = new Popup(imagePopupContainer);
imagePopup.setEventListeners();



// card Popup

const cardPopupWithForm = new PopupWithForm(cardPopupElement, handleAddCardFormSubmit);
cardPopupWithForm.setEventListeners();
const cardPopup = new Popup(cardPopupElement);

cardPopupAddBtn.addEventListener('click', function () {
  cardPopup.open();
});
// cardPopup.setEventListeners();

// cardPopupFrom.addEventListener('submit', handleAddCardFormSubmit);

function handleAddCardFormSubmit (data) {
  data = {
    name: cardPopupInputPlace.value,
    link: cardPopupInputLink.value,
  };

  renderer(data);

  cardPopupValiadator.disableSubmitButton();
  // cardPopupFrom.reset();

  // cardPopupWithForm.close();
};




const userInfo = new UserInfo( {name: profileName, activity: profileActivity} );
// const rumba = userInfo.getUserInfo();
// userInfo.setUserInfo;

// userInfo.setUserInfo();
// console.log(rumba);
// function openProfilePopup(data) {
  // data = {
  //   name: data.name,
  //   link: data.link
  // }
  // data.name = profilePopupInputName.value;
  // data.link = profilePopupInputActivity.value;
  // console.log()
  // userInfo.setUserInfo(data);
// }


// ProfilePopup
const profilePopupWithForm = new PopupWithForm(profilePopupContainer, handleProfileFormSubmit);
profilePopupWithForm.setEventListeners();
const profilePopup = new Popup(profilePopupContainer);
profileEditBtn.addEventListener('click', function () {

  // openProfilePopup(rumba);
  userInfo.setUserInfo(userInfo.getUserInfo());

  // profilePopupInputName.value = profileName.textContent;
  // profilePopupInputActivity.value = profileActivity.textContent;

  // openProfilePopup(rumba)

  profilePopup.open();
  // userInfo.setUserInfo();

});



// profilePopup.setEventListeners();
// profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

function handleProfileFormSubmit() {

  // data = {
  //   name: profileName.textContent,
  //   link: profileActivity.textContent
  // }
  // userInfo.setUserInfo(data);

  // event.preventDefault();

  profileName.textContent = profilePopupInputName.value;
  profileActivity.textContent = profilePopupInputActivity.value;
  // profilePopupWithForm.close();
};

// function openProfilePopup() {
//   profilePopup.open();
//   profilePopupInputName.value = profileName.textContent;
//   profilePopupInputActivity.value = profileActivity.textContent;
// };

// profileEditBtn.addEventListener('click', function () {
//   openProfilePopup();
// });
// profilePopupCloseBtn.addEventListener('click', function () {
//   profilePopup.close();
// });
// profilePopupCloseBtn.addEventListener('click', function () {
//   closePopup(profilePopupContainer);
// });
// const cardData123 = {
//   name: 'Карачаево-Черкессия',
//   link: './image/kirill-pershin-1088404-unsplash.png'
// };
// handleCardClick(cardData123);
// const imagePopup = new PopupWithImage(imagePopupContainer, data);
// imagePopup.open();
// imagePopupCloseBtn.addEventListener('click', function () {
//   closePopup(imagePopupContainer);
// });
// cardPopupAddBtn.addEventListener('click', function () {
//   openPopup(cardPopupElement);
// });
// cardPopupCloseBtn.addEventListener('click', function () {
//   closePopup(cardPopupElement);
// });

// bindPopupOverlayClickHandler(cardPopupElement);
// bindPopupOverlayClickHandler(imagePopupContainer);
// bindPopupOverlayClickHandler(profilePopupContainer);
// closePopupEscBtn(cardPopupElement);
// closePopupEscBtn(imagePopupContainer);
// closePopupEscBtn(profilePopupContainer);



// UserInfo
// const userInfo = new UserInfo( {profileName, profileActivity} );







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