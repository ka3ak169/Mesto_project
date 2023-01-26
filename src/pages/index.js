import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';
import {
  cardTemplate,
  cardsContainer,
  cardsData,
  popupData,
  cardPopupSelector,
  profilePopupSelector,
  imagePopupSelector,
} from "../utils/constant.js";

const profilePopupContainer = document.querySelector(profilePopupSelector);
const profileEditBtn = document.querySelector(".profile__edit-button");
const profilePopupForm = profilePopupContainer.querySelector(
  ".profile-popup__form"
);
const profilePopupInputName = profilePopupContainer.querySelector(
  ".profile-popup-name"
);
const profilePopupInputActivity = profilePopupContainer.querySelector(
  ".profile-popup-activity"
);
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
// const page = document.querySelector('.page');
const cardPopupAddBtn = document.querySelector(".profile__add-button");
const cardPopupElement = document.querySelector(cardPopupSelector);
const cardPopupInputPlace = cardPopupElement.querySelector(".card-popup-name");
const cardPopupInputLink = cardPopupElement.querySelector(
  ".card-popup-activity"
);
const cardPopupFrom = cardPopupElement.querySelector(".card-popup__form");

const popupWithImage = new PopupWithImage(imagePopupSelector);

// image Popup
const imagePopup = new Popup(imagePopupSelector);
imagePopup.setEventListeners();

const renderer = function (item) {
  const card = new Card(item, cardTemplate, () => {
    popupWithImage.open(item);
  });
  const cardElement = card.generateCard();
  defaultCardList.addItem(cardElement);
};

const defaultCardList = new Section(
  { items: cardsData, renderer },
  cardsContainer
);

defaultCardList.renderItem();



// card Popup
const cardPopupWithForm = new PopupWithForm(cardPopupSelector, handleAddCardFormSubmit);
cardPopupWithForm.setEventListeners();
const cardPopup = new Popup(cardPopupSelector);
cardPopup.setEventListeners();
cardPopupAddBtn.addEventListener("click", function () {
  cardPopup.open();
});

function handleAddCardFormSubmit(data) {
  data = {
    name: cardPopupInputPlace.value,
    link: cardPopupInputLink.value,
  };

  renderer(data);

  cardPopupValiadator.disableSubmitButton();
}

// UserInfo
const userInfo = new UserInfo({ name: profileName, activity: profileActivity });

// ProfilePopup
const profilePopupWithForm = new PopupWithForm(profilePopupSelector, handleProfileFormSubmit);
profilePopupWithForm.setEventListeners();
const profilePopup = new Popup(profilePopupSelector);
profilePopup.setEventListeners();
profileEditBtn.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  profilePopupInputName.value = data.name;
  profilePopupInputActivity.value = data.link;
  profilePopup.open();
});

function handleProfileFormSubmit() {
  userInfo.setUserInfo(userInfo.getUserInfo());
}
// form Validation
const cardPopupValiadator = new FormValidator(popupData, cardPopupFrom);
const profilePopupValiadator = new FormValidator(popupData, profilePopupForm);
profilePopupForm.addEventListener('click', () => { profilePopupValiadator.enableValidation(); });
cardPopupFrom.addEventListener('click', () => { cardPopupValiadator.enableValidation(); });


