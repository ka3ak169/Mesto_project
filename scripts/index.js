const listElement = document.querySelector(".elements");
const profilePopupContainer = document.querySelector(".profile-popup");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profilePopupForm = profilePopupContainer.querySelector(
  ".profile-popup__form"
);
const profilePopupCloseBtn = document.querySelector(
  ".profile-popup__close-button"
);
const profilePopupInputName = profilePopupContainer.querySelector(
  ".profile-popup-name"
);
const profilePopupInputActivity = profilePopupContainer.querySelector(
  ".profile-popup-activity"
);
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const page = document.querySelector(".page");
const cardPopupAddBtn = document.querySelector(".profile__add-button");
const cardSubmitBtn = document.querySelector(
  '.submit-button[name="card-submit"]'
);
const cardPopupElement = document.querySelector(".card-popup");
const cardPopupCloseBtn = cardPopupElement.querySelector(
  ".card-popup__close-button"
);
const cardPopupInputPlace = cardPopupElement.querySelector(".card-popup-name");
const cardPopupInputLink = cardPopupElement.querySelector(
  ".card-popup-activity"
);
const cardPopupFrom = cardPopupElement.querySelector(".card-popup__form");
const cardTemplate = document.querySelector(".card-template");
const imagePopupContainer = document.querySelector(".image-popup");
const imagePopupCloseBtn = imagePopupContainer.querySelector(
  ".image-popup__close-button"
);
const imagePopupLink = imagePopupContainer.querySelector(".image-popup__image");
const imagePopupaption = imagePopupContainer.querySelector(
  ".image-popup__description"
);

function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscBtn);
}

function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscBtn);
}

function closePopupClickOverlay(popupName) {
  popupName.addEventListener("mousedown", function (evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    closePopup(popupName);
  });
}

function closePopupEscBtn(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openProfilePopup() {
  openPopup(profilePopupContainer);
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputActivity.value = profileActivity.textContent;
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = profilePopupInputName.value;
  profileActivity.textContent = profilePopupInputActivity.value;
  closePopup(profilePopupContainer);
}

function cardPopupSubmit(event) {
  event.preventDefault();
  const data = {
    name: cardPopupInputPlace.value,
    link: cardPopupInputLink.value,
  };
  renderCard(data, listElement);
  cardPopupFrom.reset();
  cardSubmitBtn.disabled = true;
  cardSubmitBtn.classList.add("submit-button_invalid");

  closePopup(cardPopupElement);
}

imagePopupCloseBtn.addEventListener("click", function () {
  closePopup(imagePopupContainer);
});

function createCard(name, link, template) {
  const card = template.content
    .querySelector(".elements__element")
    .cloneNode("true");
  const cardName = card.querySelector(".elements__place");
  const cardLink = card.querySelector(".elements__image");
  const cardLike = card.querySelector(".elements__like");
  const cardTrash = card.querySelector(".elements__trash");

  cardName.textContent = name;
  cardLink.alt = name;
  cardLink.src = link;

  cardTrash.addEventListener("click", function () {
    card.remove();
  });

  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("elements__like_active");
  });

  cardLink.addEventListener("click", function () {
    imagePopupLink.src = link;
    imagePopupLink.alt = name;
    imagePopupaption.textContent = name;

    openPopup(imagePopupContainer);
  });

  return card;
}

function renderCard(data, place) {
  place.prepend(createCard(data.name, data.link, cardTemplate));
}

function initialCard() {
  const cardsData = [
    {
      name: "Карачаево-Черкессия",
      link: "./image/kirill-pershin-1088404-unsplash.png",
    },
    {
      name: "Милая кошечка Агата",
      link: "./image/Агата.jpg",
    },
    {
      name: "Милый котик Барсик",
      link: "./image/Баркик.jpg",
    },
    {
      name: "Милый котик Борис",
      link: "./image/Борис.jpg",
    },
    {
      name: "Милый котик Рыжик",
      link: "./image/Рыжик.jpg",
    },
    {
      name: "Милый котик Тимоша",
      link: "./image/Тимоша.jpg",
    },
  ];

  cardsData.forEach((item) => renderCard(item, listElement));
};

initialCard();

profileEditBtn.addEventListener("click", function () {
  openProfilePopup();
});
profilePopupCloseBtn.addEventListener("click", function () {
  closePopup(profilePopupContainer);
});
profilePopupForm.addEventListener("submit", formSubmitHandler);
cardPopupAddBtn.addEventListener("click", function () {
  openPopup(cardPopupElement);
});
cardPopupCloseBtn.addEventListener("click", function () {
  closePopup(cardPopupElement);
});
cardPopupFrom.addEventListener("submit", cardPopupSubmit);
closePopupClickOverlay(cardPopupElement);
closePopupClickOverlay(imagePopupContainer);
closePopupClickOverlay(profilePopupContainer);
closePopupEscBtn(cardPopupElement);
closePopupEscBtn(imagePopupContainer);
closePopupEscBtn(profilePopupContainer);