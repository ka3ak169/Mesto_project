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
  popupData,
  cardPopupSelector,
  profilePopupSelector,
  avatarPopupSelector,
  imagePopupSelector,
  deletePopupSelector,
  configApi,
  avatarSbmBtn,
  profileSbmBtn,
  cardSbmBtn,
} from "../utils/constant.js";

// const page = document.querySelector('.page');
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
const profileAvatar = ".profile__avatar";
const avatarPen = document.querySelector(".profile__pen");
const cardPopupAddBtn = document.querySelector(".profile__add-button");
const cardPopupElement = document.querySelector(cardPopupSelector);
const cardPopupFrom = cardPopupElement.querySelector(".card-popup__form");
const avatarPopupForm = document.querySelector(".avatar-popup__form");

// Api
const api = new Api(configApi);

// UserInfo
const userInfo = new UserInfo({
  name: profileName,
  about: profileActivity,
  avatar: profileAvatar,
});


// image Popup
const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

let userId;
let infoObject;

// User information
const getUserInfo = api.getUserInformation();

// Initial Cards
const getCards = api.getInitialCards();

Promise.all([getUserInfo, getCards])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    infoObject = userInfo.getUserInfo();
    cardsSection.renderItem(cards);
  })
  .catch((error) => {
    console.log(error);
  });

// Section
const cardsSection = new Section({ renderer }, cardsContainer);

// delete-card popup
const popupWithConfirmation = new PopupWithConfirmation(deletePopupSelector);
popupWithConfirmation.setEventListeners();

// Create Card
function createCard(item) {
  const card = new Card(
    item,
    cardTemplate,
    () => {
      popupWithImage.open(item);
    },
    handleDelete,
    userId,
    addLike,
    deleteLike
  );

  if (item.owner._id !== card.getUserId()) {
    card.deleteTrash();
  }

  card.getNumberLike(item.likes.length);

  function handleDelete(cardbox) {
    popupWithConfirmation.open();
    popupWithConfirmation.setSubmitHandler(() => {
      api
        .deleteCard(item._id)
        .then(() => {
          popupWithConfirmation.close();
          card.deleteCard(cardbox);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  function addLike(itemId) {
    api
      .addLike(itemId)
      .then((data) => {
        card.getNumberLike(data.likes.length);
        card.changeColorLike();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteLike(itemId) {
    api
      .deleteLike(itemId)
      .then((data) => {
        card.getNumberLike(data.likes.length);
        card.changeColorLike();
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
  renderLoading(true, "Создать", cardSbmBtn);
  api
    .addCard(data)
    .then((data) => {
      renderer(data);
      cardPopupWithForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      renderLoading(false, "Создать", cardSbmBtn);
    });
  cardPopupValiadator.disableSubmitButton();
}

// ProfilePopup
const profilePopupWithForm = new PopupWithForm(
  profilePopupSelector,
  handleProfileFormSubmit
);
profilePopupWithForm.setEventListeners();
function handleProfileFormSubmit(data) {
  renderLoading(true, "Сохранить", profileSbmBtn);
  api
    .changeUserInformation(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      profilePopupWithForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      renderLoading(false, "Сохранить", profileSbmBtn);
    });
}

profileEditBtn.addEventListener("click", () => {
    console.log(infoObject);
    profilePopupInputName.value = infoObject.name;
    profilePopupInputActivity.value = infoObject.about;
    profilePopupWithForm.open();
});

// avatar Popup
const avatarPopupWithForm = new PopupWithForm(
  avatarPopupSelector,
  handleAvatarFormSubmit
);
avatarPopupWithForm.setEventListeners();
avatarPen.addEventListener("click", function () {
  avatarPopupWithForm.open();
});

function handleAvatarFormSubmit(data) {
  renderLoading(true, "Сохранить", avatarSbmBtn);
  api
    .changeProfileAvatar(data.link)
    .then((data) => {
      userInfo.setUserInfo(data);
      avatarPopupWithForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      renderLoading(false, "Сохранить", avatarSbmBtn);
    });
  avatarPopupValiadator.disableSubmitButton();
}

function renderLoading(isLoading, text, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = text;
  }
}

// form Validation
const cardPopupValiadator = new FormValidator(popupData, cardPopupFrom);
cardPopupValiadator.enableValidation();
const profilePopupValiadator = new FormValidator(popupData, profilePopupForm);
profilePopupValiadator.enableValidation();
const avatarPopupValiadator = new FormValidator(popupData, avatarPopupForm);
avatarPopupValiadator.enableValidation();
