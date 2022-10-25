const token = localStorage.getItem('token')
export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _getToken = () => localStorage.getItem('token');

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(this.url + `/users/me`, {
      method: "GET",
      headers: { authorization: `Bearer ${this._getToken()}` },
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(this.url + `/cards`, {
      headers: { authorization: `Bearer ${this._getToken()}` },

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

const api = new Api({
  url: "https://api.mesto.sovickiy.nomoredomains.sbs",
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",

  },
});

export default api;