import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "./index.css";
import {
  cardTemplate,
  cardsContainer,
  cardsData,
  popupData,
  cardPopupSelector,
  profilePopupSelector,
  imagePopupSelector,
  deletePopupSelector,
  configApi,
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
const profileName = ".profile__name";
const profileActivity = ".profile__activity";
// const page = document.querySelector('.page');
const cardPopupAddBtn = document.querySelector(".profile__add-button");
const cardPopupElement = document.querySelector(cardPopupSelector);
const cardPopupFrom = cardPopupElement.querySelector(".card-popup__form");

// Api
const api = new Api(configApi);


// image Popup
const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// Section
const cardsSection = new Section({ renderer }, cardsContainer);
// Initial Cards
api.getInitialCards().then((data) => {
  cardsSection.renderItem(data)
});

// delete-card popup
const popupWithConfirmation = new PopupWithConfirmation(deletePopupSelector);

function createCard(item) {
  const card = new Card(
    item,
    cardTemplate,
    () => {popupWithImage.open(item)},
    () => {handleDelete(item)} );

  function handleDelete() {
    popupWithConfirmation.open();
    popupWithConfirmation.setSubmitHandler(() => card.deleteCard())
  } 

  popupWithConfirmation.setEventListeners();
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(card) {
  cardsSection.addItem(card);
}

function renderer(item) {
  renderCard(createCard(item));
}

// card Popup
const cardPopupWithForm = new PopupWithForm(
  cardPopupSelector,
  handleAddCardFormSubmit
);
cardPopupWithForm.setEventListeners();
cardPopupAddBtn.addEventListener("click", function () {
  cardPopupWithForm.open();
});

function handleAddCardFormSubmit(data) {
  api.addCard(data)
  .then((data) => { renderer(data) });  
  cardPopupValiadator.disableSubmitButton();
}

// UserInfo
const userInfo = new UserInfo({ name: profileName, activity: profileActivity });

// ProfilePopup
const profilePopupWithForm = new PopupWithForm(
  profilePopupSelector,
  handleProfileFormSubmit
);
profilePopupWithForm.setEventListeners();
// User information
api.getUserInformation().then((data) => {
  userInfo.setUserInfo(data);
  profileEditBtn.addEventListener('click', () => {
    profilePopupWithForm.open();
    profilePopupInputName.value = data.name;
    profilePopupInputActivity.value = data.about;
  })
});

function handleProfileFormSubmit(data) {
  api.changeUserInformation(data);
  userInfo.setUserInfo(data);
}


// form Validation
const cardPopupValiadator = new FormValidator(popupData, cardPopupFrom);
const profilePopupValiadator = new FormValidator(popupData, profilePopupForm);
profilePopupForm.addEventListener("click", () => {
  profilePopupValiadator.enableValidation();
});
cardPopupFrom.addEventListener("click", () => {
  cardPopupValiadator.enableValidation();
});