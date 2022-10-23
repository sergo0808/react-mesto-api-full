import { config } from "./constants";

export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
    this._token = config.headers.authorization;
  }

  getToken = (token) => { // Метод принимает токен и подставляет его в заголовок объекта api
    this._token = `Bearer ${token}`
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(this.url + `/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(this.url + `/cards`, {
      headers: this.headers,
    }).then(this._handleResponse)

  }

  updateUserInfom(input) {
    return fetch(this.url + `/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(input),
    }).then(this._handleResponse)

  }

  addCardApi(input) {
    return fetch(this.url + `/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(input),
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this.url + `/cards/` + id + "/likes", {
      method: isLiked ? "PUT" : "DELETE",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  deleteCardApi(id) {
    return fetch(this.url + `/cards/` + id, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  updateAvatarApi(avatar) {
    return fetch(this.url + `/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(avatar),
    }).then(this._handleResponse);
  }
}

export const api = new Api(config);