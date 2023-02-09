import {
  avatarSbmBtn,
  profileSbmBtn,
  cardSbmBtn
} from "../utils/constant.js"

export default class Api {
  constructor({ url, headers }, renderLoading ) {
    this._url = url;
    this._headers = headers;
    this._renderLoading = renderLoading;
  }

  getUserInformation() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
      return response.json()
      }
      return Promise.reject(new Error('Какая-то ошибка!'))
    })
    .catch((error) => {console.log(error);})
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
      return response.json()
      }
      return Promise.reject(new Error('Какая-то ошибка!'))
    })
    .catch((error) => {console.log(error);})
  }

  changeUserInformation(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .finally(() => {
      this._renderLoading(false, 'Сохранить', profileSbmBtn)
    })
  }

  addCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.ok) {
      return response.json()
      }
      return Promise.reject(new Error('Какая-то ошибка!'))
    })
    .catch((error) => {console.log(error);
    })
    .finally(() => {
      this._renderLoading(false, 'Создать', cardSbmBtn)
    })
  }

  deleteCard(idCard) {
    return fetch(`${this._url}cards/${idCard}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
      return response.json()
      }
      return Promise.reject(new Error('Какая-то ошибка!'))
    })
    .catch((error) => {console.log(error);})
  }

  addLike(idCard) {
    return fetch(`${this._url}cards/${idCard}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
      return response.json()
      }
      return Promise.reject(new Error('Какая-то ошибка!'))
    })
    .catch((error) => {console.log(error);})
  }

  deleteLike(idCard) {
    return fetch(`${this._url}cards/${idCard}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
      return response.json()
      }
      return Promise.reject(new Error('Какая-то ошибка!'))
    })
    .catch((error) => {console.log(error);})
  }

  changeProfileAvatar(link) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link        
      })
    })
    .finally(() => {
      this._renderLoading(false, 'Сохранить', avatarSbmBtn)
    })
  }
}
