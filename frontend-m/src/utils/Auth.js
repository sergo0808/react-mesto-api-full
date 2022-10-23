const BASE_URL = "https://api.mesto.sovickiy.nomoredomains.sbs"

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      console.log(res);
    })
    .then((data) => {
      console.log(data)
      localStorage.setItem('token', data.token);
      return data;
    })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
} 
